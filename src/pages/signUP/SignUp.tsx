
import { SignUpForm, SignUPInputWrapper, SignUpStyles,SignDiv } from './Styles'
import { ButtonS } from '../../components/button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUP = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [inputSN, setInputSN] = useState<string>("")
    const [inputSP, setInputSP] = useState<string>("")

     //User Object
 let User = {
    name: userName,
    pass: userPw
  }

   // get user name
 let data = JSON.parse(localStorage.getItem("user") as string)

    //set user details in localSate
const handleLocalStorage = (User:object)=>{
    localStorage.setItem("user", JSON.stringify(User))
  }
  //clear Localstorage
  const handleClearUser =()=>{
    localStorage.removeItem("user")
    setUserName("")
    setUserPw("")
  }

  //handle inputChange validation
const handleSignUp = (e:React.FormEvent<HTMLDivElement>)=>{
    e.preventDefault()
    if(userName === "" && userPw === "")return
    if(!data){
      for (let i = 0; i < userName.length; i++) {
        if(userName[0] == userName[0].toLocaleUpperCase() && userName.length >= 5 )
  {
            setInputSN("2px solid green")
            setInputSP("none")
            handleLocalStorage(User)
            setTimeout(()=>{
              navigate("/login")
            },2000)
        }else{
            setInputSN("2px solid red")
            setInputSP("block")
        }
      }
    }
  }
  //navigate
  const handleNavToLogIn = ()=>{
    navigate("/login")
  }
  return (
    <SignUpStyles onSubmit={e =>handleSignUp(e)}>
      <SignUpForm>
        <h1>Sign up</h1>
        <SignUPInputWrapper state={inputSN} state2={inputSP}>
            <input type="text" name="name"  placeholder="Enter Name.." onChange={e=>setUserName(e.target.value)} required/>
            <span>First latter  uppercased and five letters minimum</span>
            <input type="password" name="pw" placeholder="Enter password"  onChange={e=>setUserPw(e.target.value)} required/>
        </SignUPInputWrapper>
        <ButtonS  children="Sign up" size="60%"  type="submit" />
      </SignUpForm>
      <SignDiv>
        <span onClick={handleClearUser}>Clear profile</span>
        <span onClick={handleNavToLogIn}>Log IN</span>
    </SignDiv>
    </SignUpStyles>
  )
}

export default SignUP
