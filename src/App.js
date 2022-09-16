import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { todoData } from './mocks/data'
import { TodoMetadata } from './components/TodoMetadata'
import { useState, useEffect } from 'react'
import { sortedTodoList } from './utils/utils'

export function App() {
  const [todoList, setTodoList] = useState(() => [])

  const setTodoCompleted = (id, state) => {
    const newList = todoList.map((item) => {
      if (item.id === id) item.completed = state
      return item
    })
    sortedTodoList(newList)
    setTodoList(() => newList)
  }

  useEffect(() => {
    sortedTodoList(todoData)
    setTodoList(() => todoData)
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} todoList={todoList} setTodoList={setTodoList} />
      <TodoMetadata todoList={todoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        handleCheck={setTodoCompleted}
      />
    </div>
  )
}
