import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { TodoStyles } from "./GlobalStyles"

//pages
import Splash from "./pages/splashScreen/Splash"
import Login from "./pages/login/Login"
import Todo from "./pages/todo/Todo"
import axios from "axios"
import { useEffect, useState } from "react"
import SignUp from "./pages/signUP/SignUp"

//url
 const URL =  "https://66e184f5c831c8811b554ff6.mockapi.io/Todo";


 interface ITodo {
    todo:string,
    id:string
  }

function App() {
//States
const[TodoData, setTodoData] = useState<ITodo[]>([]);
const[ErrMsg, setErrMsg] = useState<string>("");

  //get TodoData
const getTodo = ()=>{
  axios.get(URL).then((res)=>{
    setTodoData(res.data)
  }).catch((err)=>{
    setErrMsg(err)
  })
}

//Reverse Array Algorithm

const ReverseArray = (TodoData: ITodo[])=>{
  let Sorted = [];
  for(let i = TodoData.length -1; i >= 0; i--){
    Sorted.push(TodoData[i])
  }
  return Sorted
}
const SortedData = ReverseArray(TodoData)
useEffect(()=>{
  getTodo()
},[])


  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Splash />
    },

    {
      path:"login",
      element:<Login />
    },

    {
      path:"todo",
      element:<Todo SortedData={SortedData} ErrMsg={ErrMsg}/>
    },

    {
      path:"signUp",
      element:<SignUp />
    }
  ])
  
  
  return (
    <>
    <TodoStyles />
      <RouterProvider router={Router} />
    </>
  )
}

export default App
