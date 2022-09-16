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
