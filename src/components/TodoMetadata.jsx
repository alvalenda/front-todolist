import TodoContext from '../contexts/TodoContext'
import { useContext } from 'react'
import './TodoMetadata.css'

export const TodoMetadata = () => {
  const { todoList } = useContext(TodoContext)
  return (
    <div className='TodoMetadata'>
      <span>{todoList.length ? todoList.length : 0} todos</span>
      <span>
        {todoList.reduce((acc, item) => {
          if (item.completed) return acc
          else return acc + 1
        }, 0)}{' '}
        incompleted
      </span>
    </div>
  )
}
