class AuthService {
  async register(name, email, password) {
    // 1. Hacemos la petición
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    
    return res
  }
}

export default new AuthService()
