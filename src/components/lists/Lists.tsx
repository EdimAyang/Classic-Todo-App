
import { Actions, Card, Item, ListsStyled } from './Styled'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



//url
const URL =  "https://66e184f5c831c8811b554ff6.mockapi.io/Todo";

interface ITodo {
  todo:string,
  id:string
}
const Lists:React.FC = () => {

  //States
  const[TodoData, setTodoData] = useState<ITodo[]>([]);
  const[ErrMsg, setErrMsg] = useState<string>("");
  




  //Error Msg
const ErrorNotice = () =>{
  toast.error(ErrMsg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}



    //get TodoData
  const getTodo = ()=>{
    axios.get(URL).then((res)=>{
      setTodoData(res.data)
    }).catch((err)=>{
      ErrorNotice()
      setErrMsg(err)
    })
  }
  
  
  useEffect(()=>{
    getTodo()
  },[])
  
  
  //Reverse Array Algorithm
  
  const ReverseArray = (TodoData: ITodo[])=>{
    let Sorted = [];
    for(let i = TodoData.length -1; i >= 0; i--){
      Sorted.push(TodoData[i])
    }
    return Sorted
  }
  const SortedData = ReverseArray(TodoData)



  //handle deleteTodo
  const handleDeleteTodo = (id:string)=>{
    const url =`https://66e184f5c831c8811b554ff6.mockapi.io/Todo/${id}`
   axios.delete(url).then(()=>{
    window.location.reload()
   }).catch((err)=>{
    console.log(err)
   })
  }

  return (
    <ListsStyled>
      {
        SortedData.map((c, i )=>(
          <Card key={i}>
          <Item>{c.todo}</Item>
            <Actions>
              <img src="/assets/delete.png" alt="trash" onClick={()=>handleDeleteTodo(c.id)} />
              <input type="checkbox" />
            </Actions>
          </Card>
        ))
      }
      <ToastContainer />
    </ListsStyled>
  )
}

export default Lists
