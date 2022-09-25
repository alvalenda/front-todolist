const defaultUrl = 'http://localhost:3000/todos'

export class Api {
  static async getAllTodos() {
    const response = await fetch(defaultUrl + '/find-all')
    const allTodos = await response.json()
    return allTodos
  }

  static async createTodo(newTodo) {
    const response = await fetch(defaultUrl + '/create', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(newTodo),
    })
    const createdTodo = await response.json()
    return createdTodo
  }

  static async updateTodo(id, updTodo) {
    const response = await fetch(defaultUrl + '/update/' + id, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(updTodo),
    })
    const updatedTodo = await response.json()
    return updatedTodo
  }

  static async deleteTodo(id) {
    const response = await fetch(defaultUrl + '/delete/' + id, {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    const deletedTodo = await response.json()
    return deletedTodo
  }
}
