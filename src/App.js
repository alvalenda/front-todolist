import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoMetadata } from './components/TodoMetadata'

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
      <TodoMetadata />
      <TodoList />
    </div>
  )
}

export default App
