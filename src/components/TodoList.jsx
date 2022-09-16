import { TodoItem } from './TodoItem'
import { motionItem, motionExit } from '../utils/utils'
import { motion, AnimatePresence } from 'framer-motion'

export const TodoList = ({ todoList, setTodoList, handleCheck }) => {
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete Todo ' + id + '?'))
      setTodoList(() => todoList.filter((item) => item.id !== id))
  }

  const editTodo = (todo) => {
    console.log(todo)
  }

  return (
    <div className='todo-list'>
      <AnimatePresence>
        {todoList.map((item) => (
          <motion.div
            key={item.id}
            className='Motion'
            variants={motionItem}
            initial='hidden'
            animate={item.completed ? 'completed' : 'visible'}
            exit={motionExit}
          >
            <TodoItem
              key={item.id}
              item={item}
              handleDelete={deleteTodo}
              handleEdit={editTodo}
              handleCheck={handleCheck}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
