import TodoContext from '../../contexts/TodoContext'
import { useContext } from 'react'
import './TodoMetadata.css'
import { ActionMode } from '../shared/ActionMode'

export const TodoMetadata = () => {
  const { todoList } = useContext(TodoContext)
  return (
    <div className='TodoMetadata'>
      <span>{todoList.length ? todoList.length : 0} tasks </span>
      <ActionMode />
      <span>
        {todoList.reduce((acc, item) => {
          if (!item.completed) return acc
          else return acc + 1
        }, 0)}{' '}
        completed
      </span>
    </div>
  )
}
