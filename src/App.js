import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { todoData } from './mocks/data'
import { TodoMetadata } from './components/TodoMetadata'
import { useState, useEffect } from 'react'
import { sortedTodoList, emptyTodo } from './utils/utils'
import Modal from 'react-modal'
import { DeleteModal } from './components/shared/DeleteModal'

Modal.setAppElement('#root')

export function App() {
  const [todoList, setTodoList] = useState(() => [])
  const [deleteIsOpen, setDeleteIsOpen] = useState(() => false)
  const [selectedItem, setSelectedItem] = useState(() => emptyTodo)

  const setTodoCompleted = (id, state) => {
    const newList = todoList.map((item) => {
      if (item.id === id) item.completed = state
      return item
    })
    sortedTodoList(newList)
    setTodoList(() => newList)
  }

  useEffect(() => {
    sortedTodoList(todoData)
    setTodoList(() => todoData)
  }, [])

  const handleDeleteModal = (item) => {
    setSelectedItem(() => item)
    setDeleteIsOpen((prevState) => !prevState)
  }

  const handleCloseModal = () => {
    setSelectedItem(() => emptyTodo)
    setDeleteIsOpen((prevState) => !prevState)
  }

  const handleDeleteConfirm = (id) => {
    setTodoList(() => todoList.filter((item) => item.id !== id))
    handleCloseModal()
  }

  return (
    <div className='App'>
      <Header />
      <TodoForm filter={true} todoList={todoList} setTodoList={setTodoList} />
      <TodoMetadata todoList={todoList} />

      <DeleteModal
        isOpen={deleteIsOpen}
        contentLabel={'Confirm deletion'}
        onRequestClose={handleCloseModal}
        handleConfirm={handleDeleteConfirm}
        todoItem={selectedItem}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        handleCheck={setTodoCompleted}
        handleDelete={handleDeleteModal}
      />
    </div>
  )
}
