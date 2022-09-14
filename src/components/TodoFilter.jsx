export const TodoFilter = () => {
  const handleFilter = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className='todo-filter-container'>
      <label htmlFor='todoFilter'> Filter </label>
      <select onChange={handleFilter} name='todoFilter' id='todoFilter'>
        <option value='allTodos'>Show All</option>
        <option value='incompleteTodos'>Incompleted</option>
        <option value='completedTodos'>Completed</option>
      </select>
    </div>
  )
}
