const defaultUrl = 'http://localhost:3000/todos'

export class Api {
  static async getAllTodos() {
    const response = await fetch(defaultUrl + '/find-all')
    const allTodos = await response.json()

    return allTodos
  }

  static async createTodo(todo) {
    const response = await fetch(defaultUrl + '/create', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(todo),
    })
    const newTodo = await response.json()
    return newTodo
  }
}
