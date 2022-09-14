import { Card } from './shared/Card'
import { TodoFilter } from './TodoFilter'
import './TodoForm.css'

export const TodoForm = ({ filter }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.todoInput.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input name='todoInput' type='text' placeholder='add a todo' />
        <button type='submit'>ADD</button>
        {filter && <TodoFilter />}
      </form>
    </Card>
  )
}

Card.defaultProps = {
  filter: false,
}
