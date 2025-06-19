const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const userService = {
  async getUsers() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`)
      if (!response.ok) {
        throw new Error('Error al obtener usuarios')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  },

  async getUserById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`)
      if (!response.ok) {
        throw new Error('Error al obtener usuario')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching user:', error)
      throw error
    }
  }
}