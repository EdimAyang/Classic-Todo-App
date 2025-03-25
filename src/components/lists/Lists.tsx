import React, {  useState } from 'react'
import { Actions, Card, Item, ListsStyled } from './Styled'
import axios from 'axios'


interface IList {
  List:{
    todo:string,
    id:string
  }[]
}
const Lists:React.FC<IList> = ({List}) => {
  //States
  const [DoneTask, setDoneTask] = useState<any>(false)


  //handle done Task
  const handleDoneTask = ()=>{
    setDoneTask(!DoneTask)
    console.log(DoneTask)
  }

  //handle deleteTodo
  const handleDeleteTodo = (id:string)=>{
    const url =`https://66e184f5c831c8811b554ff6.mockapi.io/Todo/${id}`
   axios.delete(url).then(()=>{
    window.location.reload()
   }).catch((err)=>{
    console.log(err)
   })
  }
console.log(List.reverse())
  return (
    <ListsStyled>
      {
        List.sort().map((c)=>(
          <Card key={c.id}>
          <Item active={DoneTask}>{c.todo}</Item>
            <Actions active={DoneTask}>
              <img src="/src/assets/delete.png" alt="trash" onClick={()=>handleDeleteTodo(c.id)}/>
              <input type="checkbox" value={DoneTask} onClick={handleDoneTask}/>
            </Actions>
        </Card>
        ))
      }
    </ListsStyled>
  )
}

export default Lists
