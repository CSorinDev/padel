class AuthService {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/auth'
  }

  async register(name, email, password) {
    try {
      const res = await fetch(`${this.baseURL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const user = await res.json()

      return user
    } catch (err) {
      return { success: false, error: 'Error al conectar con el servidor' }
    }
  }

  async login(email, password) {
    try {
      const res = await fetch(`${this.baseURL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const user = await res.json()

      return user
    } catch (error) {
      return { success: false, error: 'Error al conectar con el servidor' }
    }
  }
}

export default new AuthService()
