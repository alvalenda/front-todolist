import { createContext, useState, useEffect } from 'react'
import { sortedTodoList, findFreeId } from '../utils/utils.todo'
import { Api } from '../api/api'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(() => true)
  const [todoList, setTodoList] = useState(() => [])
  const [todoFilter, setTodoFilter] = useState(() => 'allTodos')

  useEffect(() => {
    fetchTodoList()
  }, [])

  const fetchTodoList = async () => {
    const todoData = await Api.getAllTodos()
    sortedTodoList(todoData)
    setTodoList(() => todoData)
    setIsLoading(() => false)
  }

  const addTodo = (newTodo) => {
    newTodo.id = findFreeId(todoList)
    /* frontend otimista */
    Api.createTodo(newTodo)
    const newList = [newTodo, ...todoList]
    sortedTodoList(newList)
    setTodoList(() => newList)
  }

  const deleteTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id)
    setTodoList(() => newList)
    handleLocalStorage(newList)
  }

  const updateTodo = (id, updItem) => {
    Api.updateTodo(id, updItem)
    
    setTodoList(() =>
      todoList.map((item) => (item.id === id ? { ...updItem, id } : item))
    )
    // console.log(id, updItem)
  }

  const setTodoCompleted = (id, state) => {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        item.completed = state
        item.completed_at = new Date().toLocaleString('pt-br')
      }
      return item
    })
    // na API precisará fazer PUT
    sortedTodoList(newList)
    setTodoList(() => newList)
    handleLocalStorage(newList)
  }

  const handleLocalStorage = (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  const handleTodoFilter = (filter) => {
    setTodoFilter(() => filter)
  }

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        todoList,
        todoFilter,
        addTodo,
        deleteTodo,
        updateTodo,
        setTodoCompleted,
        handleTodoFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
