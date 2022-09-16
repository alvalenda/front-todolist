import { useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from './shared/Card'

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
        Delete
      </button>
      <button onClick={() => handleEdit(item)} className='edit'>
        Edit
      </button>
    </Card>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}
