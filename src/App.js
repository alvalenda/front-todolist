import './App.css'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoMetadata } from './components/TodoMetadata'
import { DialogModal } from './components/shared/DialogModal'
import { EditModal } from './components/shared/EditModal'
import { Footer } from './components/Footer'

Modal.setAppElement('#root')

export function App() {
  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
      <TodoMetadata />
      <TodoList />
      <DialogModal contentLabel={'Confirm deletion'} />
      <EditModal contentLabel={'Details Modal'} />
      <Footer />
    </div>
  )
}
