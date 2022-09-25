const defaultUrl = 'http://localhost:3000/todos'

export const api = {
  getAllTodos: async () => {
    const response = await fetch(defaultUrl + '/find-all')
    const allTodos = await response.json()

    return allTodos
  },
}
