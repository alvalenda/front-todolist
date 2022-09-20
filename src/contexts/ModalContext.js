import { createContext, useState, useEffect, useContext } from 'react'
import { emptyTodo } from '../utils/utils'
import TodoContext from './TodoContext'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext)
  const [isDeleting, setIsDeleting] = useState(() => false)
  const [isEditing, setIsEditing] = useState(() => false)
  const [isEditingBtn, setIsEditingBtn] = useState(() => false)
  const [editText, setEditText] = useState(() => '')
  const [updBtnDisable, setUpdBtnDisable] = useState(() => 'true')
  const [selectedItem, setSelectedItem] = useState(() => ({ ...emptyTodo }))

  useEffect(() => {
    setEditText(() => selectedItem.todo ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditingBtn])

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
      setUpdBtnDisable(() => true)
      return
    }

    if (newText !== '' && newText.trim().length < 8) {
      setUpdBtnDisable(() => true)
      return
    }

    if (newText.trim() === selectedItem.todo) {
      setUpdBtnDisable(() => true)
      return
    }

    setUpdBtnDisable(() => false)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    if (editText.trim().length < 8) {
      setEditText(() => 'Must be at least 8 characters long')
      return
    }

    if (editText.trim() === selectedItem.todo) {
      handleEditButton()
      return
    }

    const id = selectedItem.id
    const updItem = { ...selectedItem, todo: editText }
    updateTodo(id, updItem)
    setSelectedItem(() => updItem)
    handleEditButton()
  }

  return (
    <ModalContext.Provider
      value={{
        isDeleting,
        isEditing,
        isEditingBtn,
        editText,
        selectedItem,
        updBtnDisable,
        handleDeleteModal,
        handleDeleteConfirm,
        handleEditModal,
        handleEditButton,
        handleTextChange,
        handleUpdate,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
