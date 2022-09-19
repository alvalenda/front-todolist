import { Card } from './shared/Card'
import { MdDeleteOutline, MdManageSearch } from 'react-icons/md'
import { useState, useContext } from 'react'
import TodoContext from '../contexts/TodoContext'
import ModalContext from '../contexts/ModalContext'
import PropTypes from 'prop-types'
import './TodoItem.css'

export const TodoItem = ({ item }) => {
  const [todoCheck, setTodoCheck] = useState(item.completed)
  const { setTodoCompleted } = useContext(TodoContext)
  const { handleDeleteModal, handleEditModal } = useContext(ModalContext)

  const handleChange = () => {
    setTodoCheck((prevState) => !prevState)
    setTodoCompleted(item.id, !todoCheck)
  }

  return (
    <Card completed={todoCheck}>
      <input
        type='checkbox'
        name='todoCheckbox'
        id='todoCheckbox'
        className='checkbox-display'
        onChange={handleChange}
        checked={todoCheck}
      />
      <div className='text-display'>{item.todo}</div>
      <button onClick={() => handleDeleteModal(item)} className='close'>
        <MdDeleteOutline size={30} color={'white'} />
      </button>
      <button onClick={() => handleEditModal(item)} className='edit'>
        <MdManageSearch size={30} color={'white'} />
      </button>
    </Card>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}
