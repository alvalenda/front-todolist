import { createContext, useState, useEffect, useContext } from 'react'
import { emptyTodo } from '../utils/utils.todo'
import TodoContext from './TodoContext'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext)
  const [isDeleting, setIsDeleting] = useState(() => false)
  const [isEditing, setIsEditing] = useState(() => false)
  const [editText, setEditText] = useState(() => '')
  const [updBtnDisable, setUpdBtnDisable] = useState(() => true)
  const [selectedItem, setSelectedItem] = useState(() => ({ ...emptyTodo }))

  useEffect(() => {
    if (isEditing) setEditText(() => selectedItem.todo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing, selectedItem])

  const handleDeleteModal = (item = emptyTodo) => {
    setSelectedItem(() => item)
    setIsDeleting((prevState) => !prevState)
  }

  const handleDeleteConfirm = (id) => {
    deleteTodo(id)
    handleDeleteModal()
  }

  const handleEditModal = (item = emptyTodo) => {
    setSelectedItem(() => item)
    setIsEditing((prevState) => !prevState)
  }

  const handleEditButton = () => {
    setUpdBtnDisable(() => true)
  }

  const handleTextChange = (e) => {
    const newText = e.target.value.trim()
    setEditText(() => e.target.value.substring(0, 60))

    if (newText === '') {
      setUpdBtnDisable(() => true)
      return
    }

    if (newText !== '' && newText.length < 8) {
      setUpdBtnDisable(() => true)
      return
    }

    if (newText === selectedItem.todo) {
      setUpdBtnDisable(() => true)
      return
    }

    setUpdBtnDisable(() => false)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    if (editText.length < 8) {
      setEditText(() => 'Must be at least 8 characters long')
      return
    }

    if (editText === selectedItem.todo) {
      handleEditButton()
      return
    }

    const id = selectedItem.id
    const updItem = { ...selectedItem, todo: editText.trim() }
    updateTodo(id, updItem)
    setSelectedItem(() => updItem)
    handleEditButton()
  }

  return (
    <ModalContext.Provider
      value={{
        isDeleting,
        isEditing,
        editText,
        selectedItem,
        updBtnDisable,
        handleDeleteModal,
        handleDeleteConfirm,
        handleEditModal,
        handleTextChange,
        handleUpdate,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
