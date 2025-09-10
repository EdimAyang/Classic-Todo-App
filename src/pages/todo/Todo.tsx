import { ButtonS } from "../../components/button/Button";
import Lists from "../../components/lists/Lists";
import { HeadImg, Nav, TodoInputWrapper, TodoStyles } from "./Styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiKeys } from "../../network/axios/QueryKeys";
import { axiosInsatnce } from "../../network/axios/axios";
import { ApiResponse } from "../../network/axios/Api.Response";
import { Api_Routes } from "../../network/axios/Api.Routes";
import { toast } from "react-toastify";
import { ITodoPayload } from "../../interface/Interfaces";

const Todo: React.FC = () => {
  //States
  const navigate = useNavigate();
  const [TodoValue, setTodoValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const queryClient = useQueryClient();

  // get user name
  let User = JSON.parse(localStorage.getItem("user") as string);

  //handle Add Todo
  const CreateTodo = async (newTodo: ITodoPayload) => {
    if (!TodoValue) return;
    setIsLoading(true)
    try {
      const res = await axiosInsatnce.post<ApiResponse>(
        `${Api_Routes.todo}`,
        newTodo
      );
      if (res.status === 201) {
        // console.log(res.data);
        toast.success(`${res.data.message}`);
      }
    } catch (error:any) {
      toast.error(`${error.message}`);
    } finally {
      setIsLoading(false)
    }
  };




  const AddTodo = useMutation({
    mutationFn: () => CreateTodo({ todo: TodoValue, isDone:false}),
    onSuccess: () => {
      setTodoValue('')
      queryClient.invalidateQueries({ queryKey: [ApiKeys.todo] });
    },
  });

  const handleCreateTodo = ()=>{
    AddTodo.mutate()
  }
  //navigate
  const handleNavToLogIn = () => {
    navigate("/login");
  };

  return (
    <TodoStyles>
      <Nav>
        <span>
          Hello <h1>{User.name}</h1>
        </span>
        <h4 onClick={handleNavToLogIn}>Log Out</h4>
      </Nav>
      <HeadImg src="/To do list-bro.png" alt="" />
      <TodoInputWrapper>
        <input
          type="text"
          value={TodoValue}
          placeholder="Enter TODO"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <ButtonS
          children="ADD!"
          size="20"
          color2="#ffff"
          color="#54BF36"
          onClick={handleCreateTodo}
          disabled={isLoading}
        />
      </TodoInputWrapper>
      <Lists />
    </TodoStyles>
  );
};

export default Todo;
