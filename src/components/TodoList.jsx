import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList, handleCheck }) => {
  const deleteTodo = (id) => {
    console.log(id)
  }

  const editTodo = (todo) => {
    console.log(todo)
  }

  return (
    <div className='todo-list'>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleDelete={deleteTodo}
          handleEdit={editTodo}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  )
}
