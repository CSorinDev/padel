import { useActionState } from 'react'
import AuthService from '../../services/AuthService'
import useAuth from '../useAuth'
import { useEffect } from 'react'

export default function useRegisterForm() {
  const [state, registerAction, loading] = useActionState(handleRegister, {
    success: false,
    error: null,
  })
  const { setUser } = useAuth()
  
  useEffect(() => {
    if(state.success && state.user) {
      setUser(state.user)
      return
    }
  }, [state])

  async function handleRegister(state, formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!name || !email || !password || !confirmPassword)
      return { success: false, error: 'Todos los campos son obligatorios' }

    if (password !== confirmPassword)
      return { success: false, error: 'Las contraseñas no coinciden' }

    const data = await AuthService.register(name, email, password)

    if (data.error) return { success: false, error: data.error }

    return { success: true, user: data.user }
  }

  return { state, registerAction, loading }
}
