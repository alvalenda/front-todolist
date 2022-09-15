import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { todoData } from './mocks/data'
import { TodoMetadata } from './components/TodoMetadata'
import { useState, useEffect } from 'react'

export function App() {
  const [todoList, setTodoList] = useState(() => [])

  const setTodoCompleted = (id, state) => {
    const newList = todoList.map((item) => {
      if (item.id === id) item.completed = state
      return item
    })

    newList.sort((a, b) => a.completed - b.completed || a.id - b.id)
    console.log(newList)

    setTodoList(() => newList)
  }

  useEffect(() => {
    setTodoList(() =>
      todoData.sort((a, b) => a.completed - b.completed || a.id - b.id)
    )
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
      <TodoMetadata todoList={todoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        handleCheck={setTodoCompleted}
      />
    </div>
  )
}
