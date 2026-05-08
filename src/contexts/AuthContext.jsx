import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()

  const logout = () => {
    setUser(null)
  }

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
