import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
    </div>
  )
}

export default App
