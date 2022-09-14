import './TodoMetadata.css'

export const TodoMetadata = ({ totalTodos, completedTodos }) => {
  return (
    <div className='TodoMetadata'>
      <span>{totalTodos ? totalTodos : 0} todos</span>
      <span>{completedTodos ? completedTodos : 0} remaining</span>
    </div>
  )
}

TodoMetadata.defaultProps = {
  totalTodos: 0,
  completedTodos: 0,
}
