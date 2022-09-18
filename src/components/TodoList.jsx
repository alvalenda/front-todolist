import { TodoItem } from './TodoItem'
import { motionItem, motionExit } from '../utils/utils'
import { motion, AnimatePresence } from 'framer-motion'

export const TodoList = ({ todoList, handleCheck, handleDelete }) => {
  // const deleteTodo = (id) => {
  //   if (window.confirm('Are you sure you want to delete Todo ' + id + '?'))
  //     setTodoList(() => todoList.filter((item) => item.id !== id))
  // }
  const editTodo = (todo) => {
    console.log(todo)
  }

  return (
    <div className='todo-list'>
      <AnimatePresence>
        {todoList.map((item) => (
          <motion.div
            key={!item.completed ? item.id : `${item.id}--completed`}
            className='Motion'
            variants={motionItem}
            initial='hidden'
            animate={item.completed ? 'completed' : 'visible'}
            exit={motionExit}
          >
            <TodoItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleEdit={editTodo}
              handleCheck={handleCheck}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// SE A LISTA QUEBRAR POR CAUSA DA ANIMAÇÃO, ACUMULANDO VALORES OU ETC... É POR CAUSA DO ID DINÂMICO IMPLEMENTADO. ELE PERMITE QUE <ANIMATEPRESENCE> TRATE A DIV COMO UMA ELEMENTO NOVO QUANDO SUA KEY É ALTERADA
