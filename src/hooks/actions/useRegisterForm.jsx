import { useActionState } from 'react'
import AuthService from '../../services/AuthService'

export default function useRegisterForm() {
  const handleRegister = async (state, formData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!name || !email || !password || !confirmPassword)
      return { success: false, error: 'Todos los campos son obligatorios' }

    if (password !== confirmPassword)
      return { success: false, error: 'Las contraseñas no coinciden' }

    const res = await AuthService.register(name, email, password)
    const data = await res.json()

    if (!res.ok) return { success: false, error: data.message }

    return { success: true, error: null }
  }

  const [state, registerAction, loading] = useActionState(handleRegister, {
    success: false,
    error: null,
  })

  return { state, registerAction, loading }
}
