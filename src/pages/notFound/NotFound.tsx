import { ButtonS } from "../../components/button/Button"
import { NotFoundStyles } from "./Style"
import { useNavigate } from "react-router";

const NotFound = () => {
    
const navigate = useNavigate()
//navigate
const handleNav = ()=>{
    navigate("/login")
  }
  return (
    <NotFoundStyles>
      <ButtonS children="back" size="10" onClick={handleNav}/>
      <div>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </NotFoundStyles>
  )
}

export default NotFound
