import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { TodoFilter } from './TodoFilter'
import { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({ filter }) => {
  const [text, setText] = useState(() => '')
  const [btnDisabled, setBtnDisabled] = useState(() => true)
  const [message, setMessage] = useState(
    () => 'Text must be at least 10 characters long'
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.todoInput.value)
  }

  const handleTextChange = (e) => {
    const newText = e.target.value
    setText(() => newText)

    if (newText === '') {
      setBtnDisabled(() => true)
      setMessage(() => null)
      return
    }
    if (newText !== '' && newText.trim().length < 10) {
      setBtnDisabled(() => true)
      setMessage(() => 'Text must be at least 10 characters long')
      return
    }
    setBtnDisabled(() => false)
    setMessage(() => null)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input
          name='todoInput'
          type='text'
          placeholder='add a todo'
          onChange={handleTextChange}
        />
        <Button type='submit'>ADD</Button>
        {filter && <TodoFilter />}
        <div className='message'>{message}</div>
      </form>
    </Card>
  )
}

Card.defaultProps = {
  filter: false,
}
