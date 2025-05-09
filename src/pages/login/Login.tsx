import { useState } from "react"
import { ButtonS } from "../../components/button/Button"
import { InputWrapper, LoginForm, LoginStyles, SignDiv } from "./Styles"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

const Login:React.FC = () => {

    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [inputSN, setInputSN] = useState<string>("")
    const [inputSP, setInputSP] = useState<string>("")
    




    //Signup msg
    const SignUpNotice = () =>{
      toast.info("Sign up !", {
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


    //Clear profile msg
const ClearProfileNotice = () =>{
  toast.info("Profile Cleared !", {
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
    console.log(data)

    //handle inputChange validation
    const handleInputChange = (e:React.FormEvent<HTMLDivElement>)=>{
      e.preventDefault()
      if(userName === "" && userPw === "")return
      if(!data){
        SignUpNotice()
      }
      if(data){
        for (let i = 0; i < userName.length; i++) {
          if(userName[0] == userName[0].toLocaleUpperCase() && userName.length >= 5 && data.name === userName && data.pass === userPw){
              setInputSN("2px solid green")
              setInputSP("none")
              setTimeout(()=>{
                navigate("/todo")
              },2000)
          }else{
              setInputSN("2px solid red")
              setInputSP("block")
          }
        }
      }else{
        setInputSN("2px solid red")
        setInputSP("block")
      }
    }

  
    //clear Localstorage
    const handleClearUser =()=>{
      localStorage.removeItem("user")
      ClearProfileNotice()
      setUserName("")
      setUserPw("")
    }

//navigate user to Signup page
const NavSignup = ()=>{
  navigate("/signUP")
}

  return (
    <LoginStyles onSubmit={e =>handleInputChange(e)} >
      <img src="/Login-rafiki.png" alt="" />
      <LoginForm>
        <h1>Log in</h1>

        <InputWrapper state={inputSN} state2={inputSP}>
            <input type="text" name="name"  placeholder="Enter Name.." onChange={e=>setUserName(e.target.value)} required/>
            <span>First latter  uppercased and five letters minimum</span>
            <input type="password" name="pw" placeholder="Enter password"  onChange={e=>setUserPw(e.target.value)} required/>
        </InputWrapper>
        <ButtonS  children="Log in" size="60%"  type="submit" />
      </LoginForm>
        <SignDiv>
            <span onClick={handleClearUser}>Clear profile</span>
            <span onClick={NavSignup}>Sign up </span>
        </SignDiv>
        <ToastContainer />
    </LoginStyles>
  )
}

export default Login
