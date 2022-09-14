import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card } from './shared/Card'

export const TodoItem = ({ item, handleDelete, handleEdit }) => {
  const [todoCheck, setTodoCheck] = useState(item.completed)

  useEffect(() => {
    console.log(todoCheck)
  }, [])

  const handleChange = (e) => {
    console.log(e.target.checked)
    setTodoCheck((prevState) => (prevState ? false : true))
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
