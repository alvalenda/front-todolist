import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { todoData } from './mocks/data'
import { TodoMetadata } from './components/TodoMetadata'
import { useState, useEffect } from 'react'
import { sortedTodoList } from './utils/utils'
import Modal from 'react-modal'
import { DeleteModal } from './components/shared/DeleteModal'

Modal.setAppElement('#root')

export function App() {
  const [todoList, setTodoList] = useState(() => [])
  const [deleteIsOpen, setDeleteIsOpen] = useState(() => false)

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

  const handleDeleteModal = () => {
    setDeleteIsOpen((prevState) => !prevState)
  }

  const handleDeleteConfirm = () => {
    console.log('DELETOU!!!')
  }

  return (
    <div className='App'>
      <Header />
      <button onClick={handleDeleteModal}>Teste</button>
      <TodoForm filter={true} todoList={todoList} setTodoList={setTodoList} />
      <TodoMetadata todoList={todoList} />

      <DeleteModal
        isOpen={deleteIsOpen}
        onAfterOpen={() => {
          console.log('After Open')
        }}
        onRequestClose={handleDeleteModal}
        contentLabel={'Que loucura de contentLabel'}
        handleConfirm={handleDeleteConfirm}
        todoItem={'Criar o Todo Element'}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        handleCheck={setTodoCompleted}
      />
    </div>
  )
}
