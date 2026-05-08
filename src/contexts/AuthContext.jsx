import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userData = document.cookie.split(';')[0].split('=')[1]
    if (!userData) return null

    const decodedUserData = decodeURIComponent(userData)

    return JSON.parse(decodedUserData) || null
  })

  const logout = () => {
    setUser(null)
  }

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
