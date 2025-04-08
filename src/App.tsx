import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { TodoStyles } from "./GlobalStyles"

//pages
import Splash from "./pages/splashScreen/Splash"
import Login from "./pages/login/Login"
import Todo from "./pages/todo/Todo"
import SignUp from "./pages/signUP/SignUp"
import NotFound from "./pages/notFound/NotFound"




 

function App() {

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
      element:<Todo />
    },

    {
      path:"signUp",
      element:<SignUp />
    },
    {
      path:"*",
      element:<NotFound />
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
