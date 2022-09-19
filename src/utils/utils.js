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

/////////////////////////////// MOTION ///////////////////////
export const motionItem = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      x: { duration: 0.5, easing: 'easeOutQuart' },
      y: { duration: 0.5, easing: 'easeOutQuart' },
      opacity: { duration: 0.5, easing: 'easeOutQuart' },
      delay: 0.2,
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
      x: { duration: 0.5, easing: 'easeOutQuart' },
      y: { duration: 0.5, easing: 'ease' },
      opacity: { duration: 0.5, easing: 'easeOutQuart' },
      delay: 0.3,
      default: { ease: 'linear' },
    },
  },
}
// delay in visible 0.2 and completed 0.3 workds fine. maybe 0.4 in completed
export const motionExit = {
  x: 90,
  opacity: 0,
  transition: {
    x: { duration: 0.5, easing: 'ease' },
    opacity: { duration: 0.5, easing: 'easeOutQuart' },
  },
}

///////////////////////////////////////////////
export const emptyTodo = {
  id: null,
  todo: null,
  completed: null,
  created_at: null,
  completed_at: null,
}
///////////////////////////////////////////////

//// handle date
export const printDate = (dateString) => {
  if (!dateString) return 'Date not specified'
  try {
    const date = createDate(dateString)
    return date.toUTCString()
  } catch (err) {
    console.log(err.name)
    return 'Invalid Date'
  }
}

export const createDate = (dateString) => {
  const [dateValues, timeValues] = dateString.split(' ')
  const [day, month, year] = dateValues.split('/')
  const [hours, minutes, seconds] = timeValues.split(':')

  const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds)

  return date
}

export const subtractDates = (item) => {
  let [dateA, dateB] = [item.created_at, item.completed_at]
  if (!dateA) return 'something happened'
  if (!dateB) dateB = new Date().toLocaleString('pt-br')
  try {
    const elapsedTime = createDate(dateB) - createDate(dateA)

    return elapsedTime
  } catch (err) {
    console.log(err.name)
    return 'something happened in error'
  }
}

export const elapsedTime = (item) => {
  if (item.id === null) return ' '
  const seconds = subtractDates(item)
  // console.log(`${parseInt(seconds / 86400000)} days`)

  if (seconds >= 86400000) return `${parseInt(seconds / 86400000)} days`
  if (seconds >= 3600000) return `${parseInt(seconds / 3600000)} hours`
  if (seconds >= 60000) return `${parseInt(seconds / 60000)} minutes`
  if (seconds >= 1000) return `< 1 minute`

  return 'no time registred'
}
