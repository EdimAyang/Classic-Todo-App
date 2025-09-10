import { Actions, Card, Item, ListsStyled } from "./Styled";
import { useEffect, useState } from "react";
import { ITODO, ITodoPayload } from "../../interface/Interfaces";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiKeys } from "../../network/axios/QueryKeys";
import { axiosInsatnce } from "../../network/axios/axios";
import { ApiResponse } from "../../network/axios/Api.Response";
import { Api_Routes } from "../../network/axios/Api.Routes";
import { toast } from "react-toastify";





const Lists: React.FC = () => {
  //States
  const [TodoData, setTodoData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Checked, setCheck] = useState<boolean>(false);
  const [ID, setID] = useState();
  const queryClient = useQueryClient();

  //get todo
  const getTodos = async () => {
    // setIsLoading(true);
    try {
      const res = await axiosInsatnce.get<ApiResponse>(`${Api_Routes.todo}`);
      return res.data;
    } catch (error: any) {
      toast.error(`${error.message}`);
    } finally {
      // setIsLoading(false);
    }
  };

  // update todo
  const UpdateCheckedTodo = async (id: any, newTodo: ITodoPayload) => {
    try {
      const res = await axiosInsatnce.put<ApiResponse>(
        `${Api_Routes.todo}/${id}`,
        newTodo
      );
      if (res.status === 201) {
        toast.success(`${res.data.message}`);
      }
    } catch (error) {
      toast.error("Something went Wrong!");
    } finally {
    }
  };

  // Delete todo
  const DeleteTodo = async (id: any) => {
    try {
      const res = await axiosInsatnce.delete<ApiResponse>(
        `${Api_Routes.todo}/${id}`
      );
      if (res.status === 200) {
        toast.success(`${res.data.message}`);
      }
    } catch (error) {
      toast.error("Something went Wrong !");
    } finally {
    }
  };

  //Queries
  const { data } = useQuery({
    queryKey: [ApiKeys.todo],
    queryFn: getTodos,
  });

  const UpdateTodoCheck = useMutation({
    mutationFn: () => UpdateCheckedTodo(ID, { isDone: Checked }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ApiKeys.todo] });
    },
  });

  const DeleteTodoQuery = useMutation({
    mutationFn: () => DeleteTodo(ID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ApiKeys.todo] });
    },
  });

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    setCheck(e.target.checked);
    setID(id);
    UpdateTodoCheck.mutate();
  };

  const handleDeleteTodo = (id:any)=>{
    setID(id)
    DeleteTodoQuery.mutate()
  }
  useEffect(() => {
    if (data) setTodoData(data);
  }, [data]);

  //Reverse Array Algorithm
  const ReverseArray = (TodoData: ITODO[]) => {
    let Sorted = [];
    for (let i = TodoData.length - 1; i >= 0; i--) {
      Sorted.push(TodoData[i]);
    }
    return Sorted;
  };
  const SortedData = ReverseArray(TodoData);

  return (
    <ListsStyled>
      {SortedData.map((c: ITODO, i: number) => (
        <Card key={i}>
          <Item>{c.todo}</Item>
          <Actions>
            <img src="/delete.png" alt="trash" onClick={()=>handleDeleteTodo(c._id)}/>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, c._id)}
              checked={c.isDone}
            />
          </Actions>
        </Card>
      ))}
    </ListsStyled>
  );
};

export default Lists;
