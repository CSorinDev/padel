import { useActionState } from 'react'
import AuthService from '../../services/AuthService'
import useAuth from '../useAuth'

export default function useLoginForm() {
  const { setUser } = useAuth()

  const [state, loginAction, loading] = useActionState(handleLogin, {
    success: false,
    error: null,
  })

  async function handleLogin(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      return { success: false, error: 'Todos los campos son obligatorios' }
    }

    const result = await AuthService.login(email, password)

    if (result.error) return { success: false, error: result.error }

    setUser(result.user)
    return { success: true, user: result.user }
  }

  return { state, loginAction, loading }
}
