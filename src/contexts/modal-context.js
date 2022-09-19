import { createContext, useState, useContext } from 'react'
import { emptyTodo } from '../utils/utils'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const { deleteTodo } = useContext(TodoContext)
  const [isDeleting, setIsDeleting] = useState(() => false)
  const [isEditing, setIsEditing] = useState(() => false)
  const [selectedItem, setSelectedItem] = useState(() => ({ ...emptyTodo }))

  const handleDeleteModal = (item = emptyTodo) => {
    setSelectedItem(() => ({ ...item }))
    setIsDeleting((prevState) => !prevState)
  }

  const handleDeleteConfirm = (id) => {
    deleteTodo(id)
    handleDeleteModal()
  }

  return (
    <ModalContext.Provider
      value={{
        isDeleting,
        isEditing,
        selectedItem,
        handleDeleteModal,
        handleDeleteConfirm,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
