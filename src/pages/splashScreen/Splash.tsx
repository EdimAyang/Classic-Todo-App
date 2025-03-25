import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SplashStyles } from './Styles'
import { ButtonS } from '../../components/button/Button'


const Splash:React.FC = () => {
  // get user name
let data = JSON.parse(localStorage.getItem("user") as string)

  const navigate = useNavigate();

  //Navigate to loginscreen
  const handleNavigate = ()=>{
    navigate("/login")
  }

  //check if user exist
  const handleUserExist = ()=>{
    if(data){
      navigate("/login")
    }
  }

  useEffect(()=>{
    handleUserExist()
  },[])

  return (
    <SplashStyles>
      <img src="/src/assets/To do list-amico.png" alt="" />

     <ButtonS children='Get Started' onClick={handleNavigate}/>
    </SplashStyles>
  )
}

export default Splash
