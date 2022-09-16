export const findFreeId = (list) => {
  const sortedById = listSortedById(list)
  let previousId = 0

  for (const item of sortedById) {
    if (item.id !== previousId + 1) {
      return previousId + 1
    }
    previousId = item.id
  }

  return previousId + 1
}

const listSortedById = (list) => {
  return list.slice().sort((a, b) => a.id - b.id)
}

export const sortedTodoList = (todoList) => {
  todoList.sort((a, b) => a.completed - b.completed || a.id - b.id)
}

/////////////////////////////// MOTION
export const motionItem = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      x: { duration: 0.8, easing: 'easeOutQuart' },
      y: { duration: 0.8, easing: 'easeOutQuart' },
      opacity: { duration: 1.5, easing: 'easeOutQuart' },
      default: { ease: 'linear' },
    },
  },
  completed: {
    x: 0,
    y: 0,
    opacity: 0.4,
    transition: {
      type: 'spring',
      stiffness: 100,
      x: { duration: 0.8, easing: 'easeOutQuart' },
      y: { duration: 0.8, easing: 'ease' },
      opacity: { duration: 1.5, easing: 'easeOutQuart' },
      delay: 1,
      default: { ease: 'linear' },
    },
  },
}

export const motionExit = {
  x: 90,
  opacity: 0,
  transition: {
    x: { duration: 0.8, easing: 'ease' },
    opacity: { duration: 0.8, easing: 'easeOutQuart' },
  },
}
