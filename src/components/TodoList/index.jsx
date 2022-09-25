import TodoContext from '../../contexts/TodoContext'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { motionItem, motionExit } from '../../utils/utils.motion'
import { Card } from '../shared/Card'
import { TodoItem } from '../TodoItem'
import { LoadingSpinner } from '../shared/LoadingSpinner'

export const TodoList = () => {
  const { todoList, todoFilter, isLoading } = useContext(TodoContext)

  if (isLoading) return <LoadingSpinner />

  if (!isLoading && todoList.length === 0)
    return (
      <Card>
        <span className='zero-todo-msg'>
          Please enter your first to-do task
        </span>
      </Card>
    )

  return (
    <div className='todo-list'>
      <AnimatePresence>
        {todoList.map((item) => {
          const todoListReturn = (
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
          )

          switch (todoFilter) {
            case 'allTodos':
              return todoListReturn

            case 'incompleteTodos':
              if (!item.completed) return todoListReturn
              break

            case 'completedTodos':
              if (item.completed) return todoListReturn
              break

            default:
              break
          }
          return ''
        })}
      </AnimatePresence>
    </div>
  )
}

// SE A LISTA QUEBRAR POR CAUSA DA ANIMAÇÃO, ACUMULANDO VALORES OU ETC... É POR CAUSA DO ID DINÂMICO IMPLEMENTADO. ELE PERMITE QUE <ANIMATEPRESENCE> TRATE A DIV COMO UMA ELEMENTO NOVO QUANDO SUA KEY É ALTERADA
