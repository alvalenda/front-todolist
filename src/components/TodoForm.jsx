import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { TodoFilter } from './TodoFilter'
import { findFreeId, sortedTodoList } from '../utils/utils'
import { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({ filter, todoList, setTodoList }) => {
  const [text, setText] = useState(() => '')
  const [btnDisabled, setBtnDisabled] = useState(() => true)
  const [message, setMessage] = useState(() => '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length < 8) return
    const newTodo = {
      id: findFreeId(todoList),
      todo: text,
      completed: false,
      created_at: new Date().toLocaleString(),
      completed_at: null,
    }
    const newList = [...todoList, newTodo]

    sortedTodoList(newList)
    setTodoList(() => newList)
    setBtnDisabled(() => true)
    setText(() => '')
  }

  const handleTextChange = (e) => {
    const newText = e.target.value
    setText(() => newText)

    if (newText === '') {
      setBtnDisabled(() => true)
      setMessage(() => '')
      return
    }
    if (newText !== '' && newText.trim().length < 8) {
      setBtnDisabled(() => true)
      setMessage(() => 'Text must be at least 8 characters long')
      return
    }
    setMessage(() => '')
    setBtnDisabled(() => false)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input
          name='todoInput'
          type='text'
          placeholder='add a todo'
          onChange={handleTextChange}
          value={text}
        />
        <Button type='submit' version={'form'} isDisabled={btnDisabled}>
          ADD
        </Button>
        {filter && <TodoFilter />}
        <div className='message'>{message}</div>
      </form>
    </Card>
  )
}

Card.defaultProps = {
  filter: false,
}
