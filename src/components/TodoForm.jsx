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
    const newTodo = {
      id: findFreeId(todoList),
      todo: text,
      completed: false,
      created_at: new Date().toLocaleString(),
      completed_at: null,
    }

    const newList = [...todoList]
    newList.push(newTodo)
    sortedTodoList(newList)
    setTodoList(() => newList)
  }

  const handleTextChange = (e) => {
    const newText = e.target.value
    console.log(e.target.value)
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
    setBtnDisabled(() => false)
    setMessage(() => '')
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
