import { createContext, useState, useEffect, useContext } from 'react'
import { emptyTodo } from '../utils/utils'
import TodoContext from './TodoContext'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const { deleteTodo } = useContext(TodoContext)
  const [isDeleting, setIsDeleting] = useState(() => false)
  const [isEditing, setIsEditing] = useState(() => false)
  const [isEditingBtn, setIsEditingBtn] = useState(() => false)
  const [editText, setEditText] = useState(() => '')
  const [selectedItem, setSelectedItem] = useState(() => ({ ...emptyTodo }))

  useEffect(() => {
    setEditText(() => selectedItem.todo ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing])

  const handleDeleteModal = (item = emptyTodo) => {
    setSelectedItem(() => ({ ...item }))
    setIsDeleting((prevState) => !prevState)
  }

  const handleDeleteConfirm = (id) => {
    deleteTodo(id)
    handleDeleteModal()
  }

  const handleEditModal = (item = emptyTodo) => {
    setSelectedItem(() => ({ ...item }))
    setIsEditingBtn(() => false)
    setIsEditing((prevState) => !prevState)
  }

  const handleEditButton = () => {
    setIsEditingBtn((prevState) => !prevState)
  }

  const handleTextChange = (e) => {
    const newText = e.target.value
    setEditText(() => newText)

    if (newText === '') {
      //   setBtnDisabled(() => true)
      //   setMessage(() => '')
      return
    }
    if (newText !== '' && newText.trim().length < 8) {
      //   setBtnDisabled(() => true)
      //   setMessage(() => 'Text must be at least 8 characters long')
      return
    }
    // setMessage(() => '')
    // setBtnDisabled(() => false)
  }

  return (
    <ModalContext.Provider
      value={{
        isDeleting,
        isEditing,
        isEditingBtn,
        editText,
        selectedItem,
        handleDeleteModal,
        handleDeleteConfirm,
        handleEditModal,
        handleEditButton,
        handleTextChange,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
