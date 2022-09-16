import { Card } from './shared/Card'
import { MdDeleteOutline, MdEditNote } from 'react-icons/md'
import { useState } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'

export const TodoItem = ({ item, handleDelete, handleEdit, handleCheck }) => {
  const [todoCheck, setTodoCheck] = useState(item.completed)

  const handleChange = () => {
    // console.log(!todoCheck)
    setTodoCheck((prevState) => !prevState)
    handleCheck(item.id, !todoCheck)
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
      <button onClick={() => handleDelete(item.id)} className='close'>
        <MdDeleteOutline size={30} color={'white'} />
      </button>
      <button onClick={() => handleEdit(item)} className='edit'>
        <MdEditNote size={30} color={'white'} />
      </button>
    </Card>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}
