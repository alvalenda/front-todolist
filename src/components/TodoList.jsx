import { todoData } from '../mocks/data'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const deleteTodo = (id) => {
    console.log(id)
  }

  const editTodo = (todo) => {
    console.log(todo)
  }

  return (
    <div className='todo-list'>
      {todoData.map((item, index) => (
        <TodoItem
          key={index + 1}
          item={item}
          handleDelete={deleteTodo}
          handleEdit={editTodo}
        />
      ))}
    </div>
  )
}
