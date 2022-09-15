import './TodoMetadata.css'
import { useEffect } from 'react'

export const TodoMetadata = ({ todoList }) => {
  let totalTodos, remainingTodos

  const setMetadata = () => {
    totalTodos = todoList.length
    remainingTodos = todoList.reduce((acc, item) => {
      if (item.completed) return acc
      else return acc + 1
    }, 0)
    console.log(totalTodos, remainingTodos)
  }
  setMetadata()

  return (
    <div className='TodoMetadata'>
      <span>{totalTodos ? totalTodos : 0} todos</span>
      <span>{remainingTodos ? remainingTodos : 0} remaining</span>
    </div>
  )
}
