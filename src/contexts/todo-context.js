import { createContext, useState, useEffect } from 'react'
import { sortedTodoList, emptyTodo } from '../utils/utils'
import { todoData } from '../mocks/data'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(() => true)
  const [todoList, setTodoList] = useState(() => [])

  useEffect(() => {
    fetchTodoList()
  }, [])

  const fetchTodoList = () => {
    sortedTodoList(todoData)
    setTodoList(() => todoData)
    setIsLoading(() => false)
  }

  const addTodo = (newTodo) => {
    // newTodo.id = findFreeId(todoList)
    // const newList = [newTodo, ...todoList]
    // sortedTodoList(newList)
    // setTodoList(()=> newList)
  }

  const deleteTodo = (id) => {
    setTodoList(() => todoList.filter((item) => item.id !== id))
  }

  const updateTodo = (id, updItem) => {}

  const setTodoCompleted = (id, state) => {
    const newList = todoList.map((item) => {
      if (item.id === id) item.completed = state
      return item
    })
    // na API precisará fazer PUT
    sortedTodoList(newList)
    setTodoList(() => newList)
  }

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        todoList,
        addTodo,
        deleteTodo,
        updateTodo,
        setTodoCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
