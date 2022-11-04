import { Card } from '../shared/Card'
import {
  MdDeleteOutline,
  MdManageSearch,
  MdOutlineCheck,
  MdEditNote,
} from 'react-icons/md'
import { useState, useContext } from 'react'
import TodoContext from '../../contexts/TodoContext'
import ModalContext from '../../contexts/ModalContext'
import PropTypes from 'prop-types'
import './TodoItem.css'

export const TodoItem = ({ item }) => {
  const [todoCheck, setTodoCheck] = useState(item.completed)
  const { activedMode, setTodoCompleted } = useContext(TodoContext)
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
      <section className='check-icon' onClick={handleChange}>
        {todoCheck && <MdOutlineCheck size={20} color={'white'} />}
      </section>
      <div className='text-display'>{item.todo}</div>

      {activedMode === 'DELETING' && (
        <button onClick={() => handleDeleteModal(item)} className='close'>
          <MdDeleteOutline size={35} color={'white'} />
        </button>
      )}

      {activedMode === 'EDITING' && (
        <button onClick={() => handleEditModal(item)} className='edit'>
          <MdEditNote size={35} color={'white'} />
        </button>
      )}

      {activedMode === 'NORMAL' && (
        <button onClick={() => handleEditModal(item)} className='edit'>
          <MdManageSearch size={35} color={'white'} />
        </button>
      )}
    </Card>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}
