import './TodoFilter.css'
import TodoContext from '../../contexts/TodoContext'
import { useContext } from 'react'

export const TodoFilter = () => {
  const { handleTodoFilter } = useContext(TodoContext)
  const handleFilter = (e) => {
    handleTodoFilter(e.target.value)
  }
  return (
    <div className='todo-filter-container'>
      <label htmlFor='todoFilter'> Filter </label>
      <select onChange={handleFilter} name='todoFilter' id='todoFilter'>
        <option value='allTodos'>Show All</option>
        <option value='incompleteTodos'>Incompleted</option>
        <option value='completedTodos'>Completed</option>
      </select>
    </div>
  )
}
