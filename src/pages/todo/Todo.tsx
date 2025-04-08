
import axios from 'axios'
import { ButtonS } from '../../components/button/Button'
import Lists from '../../components/lists/Lists'
import { HeadImg, Nav, TodoInputWrapper, TodoStyles } from './Styled'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

//url
const URL =  "https://66e184f5c831c8811b554ff6.mockapi.io/Todo";


const Todo:React.FC = () => {
//States
   const navigate = useNavigate()
  const [TodoValue, setTodoValue] = useState<string>("")

  //Succes Msg
  const SuccessNotice = () =>{
    toast.success("Todo Added", {
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
    // get user name
    let data = JSON.parse(localStorage.getItem("user") as string) 
   
     //handle Add Todo
    const handleAddTodo =()=>{
      if(!TodoValue)return
      const newTodo = {
        todo:TodoValue
      }
     axios.post(URL,newTodo).then((res)=>{
      console.log(res.data)
      SuccessNotice()
      setTodoValue("")
      setTimeout(()=>{
        window.location.reload()
      },2000)
     }).catch((err)=>{
      console.log(err)
     })
      
    }
    

     //navigate
 const handleNavToLogIn = ()=>{
  navigate("/login")
}
  return (
    <TodoStyles>
      <Nav>
        <span>Hello <h1>{data.name}</h1></span>
        <h4 onClick={handleNavToLogIn}>Log Out</h4>
      </Nav>
      <HeadImg src="/To do list-bro.png" alt="" />
      <TodoInputWrapper>
        <input type="text" value={TodoValue} placeholder='Enter TODO' onChange={e=>setTodoValue(e.target.value)}/>
        <ButtonS children='ADD!' size='20' color2='#ffff' color='#54BF36' onClick={handleAddTodo}/>
      </TodoInputWrapper>
      <Lists />
      <ToastContainer />
    </TodoStyles>
  )
}

export default Todo
