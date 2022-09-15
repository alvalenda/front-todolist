import { TodoItem } from './TodoItem'
import { motion, AnimatePresence } from 'framer-motion'

export const TodoList = ({ todoList, handleCheck }) => {
  const deleteTodo = (id) => {
    console.log(id)
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
        y: { duration: 0.8, easing: 'easeOutQuart' },
        opacity: { duration: 1.5, easing: 'easeOutQuart' },
        delay: 0.1,
        stagger: 0.3,
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
            animate='visible'
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
