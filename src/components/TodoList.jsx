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
      <TodoItem
        key={todoData[0].id}
        item={todoData[0]}
        handleDelete={deleteTodo}
        handleEdit={editTodo}
      />
    </div>
  )
}
