import { createContext, useState, useEffect } from 'react'
import { emptyTodo } from '../utils/utils'
import { todoData } from '../mocks/data'
const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(() => true)
  const [todoList, setTodoList] = useState(() => [])
  const [todoDelete, setTodoDelete] = useEffect(() => ({ ...emptyTodo }))
  const [todoEdit, setTodoEdit] = useState(() => ({ ...emptyTodo }))

  useEffect(() => {
    fetchTodoList()
  }, [])

  const fetchTodoList = () => {
    setTodoList(() => todoData)
    setIsLoading(() => false)
  }

  const addTodo = (newTodo) => {
    // newTodo.id = findFreeId(todoList)
    // const newList = [newTodo, ...todoList]
    // sortedTodoList(newList)
    // setTodoList(()=> newList)
  }

  const deleteTodo = (todo) => {}

  const updateTodo = (id, updItem) => {}

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        todoList,
        todoDelete,
        todoEdit,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
