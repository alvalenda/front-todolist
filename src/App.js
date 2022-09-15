import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { todoData } from './mocks/data'
import { TodoMetadata } from './components/TodoMetadata'
import { useState, useEffect } from 'react'

function App() {
  const [todoList, setTodoList] = useState(() => [])

  const handleCheck = (id) => {}

  useEffect(() => {
    setTodoList(() => todoData)
    console.log(todoList)
  }, [todoList])

  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
      <TodoMetadata todoList={todoList} />
      <TodoList todoList={todoList} handleCheck={handleCheck} />
    </div>
  )
}

export default App
