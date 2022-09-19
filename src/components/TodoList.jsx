import { TodoItem } from './TodoItem'
import { motionItem, motionExit } from '../utils/utils'
import { motion, AnimatePresence } from 'framer-motion'
import TodoContext from '../contexts/TodoContext'
import { useContext } from 'react'

export const TodoList = () => {
  const { todoList } = useContext(TodoContext)
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
            <TodoItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// SE A LISTA QUEBRAR POR CAUSA DA ANIMAÇÃO, ACUMULANDO VALORES OU ETC... É POR CAUSA DO ID DINÂMICO IMPLEMENTADO. ELE PERMITE QUE <ANIMATEPRESENCE> TRATE A DIV COMO UMA ELEMENTO NOVO QUANDO SUA KEY É ALTERADA
