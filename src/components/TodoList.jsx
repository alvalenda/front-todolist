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
        delay: 0.2,
        stagger: 5,
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
