import Button from '../components/ui/Button'
import { NavLink } from 'react-router'
import useRegisterForm from '../hooks/actions/useRegisterForm'
import { TriangleAlert } from 'lucide-react'

export default function RegisterPage() {
  const { state, registerAction, loading } = useRegisterForm()

  return (
    <form className="form" action={registerAction}>
      <h1>Registro</h1>

      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="confirmPassword">Repetir Contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />

      <Button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </Button>

      {state?.error && (
        <span>
          <TriangleAlert size={16} />
          {state.error}{' '}
        </span>
      )}

      <p>
        ¿Ya tienes cuenta? <NavLink to="/login">Inicia Sesión</NavLink>
      </p>
    </form>
  )
}
