import { Card } from './shared/Card'
import { TodoFilter } from './TodoFilter'

export const TodoForm = ({ filter }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.todoInput.value)
  }

  return (
    <Card>
      <div className='form-container'>
        <form onSubmit={handleSubmit} action='/todos'>
          <input name='todoInput' type='text' placeholder='add a todo' />
          <button type='submit'>ADD</button>
          {filter && <TodoFilter />}
        </form>
      </div>
    </Card>
  )
}

Card.defaultProps = {
  filter: false,
}
