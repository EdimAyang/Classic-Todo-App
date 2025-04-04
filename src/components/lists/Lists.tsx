import React, { useState } from 'react'
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
  const [Color, setColor] = useState<string>("")
  const [Check, setCheck] = useState(true)




  //handle done Task
  const handleDoneTask = (e:React.ChangeEvent<HTMLInputElement>, i:number)=>{
    if(Number(e.target.id) === i){
      console.log( e.target.id)
      localStorage.setItem(e.target.id, JSON.stringify(Check))
      if(JSON.parse(localStorage.getItem(e.target.id) as string) === true){
        setColor("#54BF36")
      }
      setCheck(!Check)
    }
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
console.log(List)
  return (
    <ListsStyled>
      {
        List.map((c, i )=>(
          <Card key={i}>
          <Item>{c.todo}</Item>
            <Actions color={Color}>
              <img src="/assets/delete.png" alt="trash" onClick={()=>handleDeleteTodo(c.id)} />
              <input type="checkbox" id={String(i)} onChange={(e)=>handleDoneTask(e,i)} />
            </Actions>
          </Card>
        ))
      }
    </ListsStyled>
  )
}

export default Lists
