import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoMetadata } from './components/TodoMetadata'
import ModalContext from './contexts/ModalContext'
import { useContext } from 'react'
import Modal from 'react-modal'
import { DeleteModal } from './components/shared/DeleteModal'
import { EditModal } from './components/shared/EditModal'

Modal.setAppElement('#root')

export function App() {
  const { isDeleting, selectedItem, handleDeleteModal, handleDeleteConfirm } =
    useContext(ModalContext)

  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} />
      <TodoMetadata />
      <TodoList />

      <DeleteModal
        isOpen={isDeleting}
        contentLabel={'Confirm deletion'}
        onRequestClose={handleDeleteModal}
        handleConfirm={handleDeleteConfirm}
        todoItem={selectedItem}
      />
      <EditModal contentLabel={'Details Modal'} />
    </div>
  )
}
