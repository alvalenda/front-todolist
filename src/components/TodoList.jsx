import { TodoItem } from './TodoItem'
import { motion, AnimatePresence } from 'framer-motion'

export const TodoList = ({ todoList, setTodoList, handleCheck }) => {
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete Todo ' + id + '?'))
      setTodoList(() => todoList.filter((item) => item.id !== id))
  }

  const editTodo = (todo) => {
    console.log(todo)
  }

  const motionItem = {
    hidden: { y: 90, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        y: { duration: 0.8, easing: 'easeOutQuart' },
        opacity: { duration: 1.5, easing: 'easeOutQuart' },
        default: { ease: 'linear' },
      },
    },
    completed: {
      y: 0,
      opacity: 0.4,
      transition: {
        type: 'spring',
        stiffness: 100,
        y: { duration: 0.8, easing: 'ease' },
        opacity: { duration: 1.5, easing: 'easeOutQuart' },
        delay: 1,
        default: { ease: 'linear' },
      },
    },
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
