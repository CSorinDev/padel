import { NavLink, useNavigate } from 'react-router'
import Button from '../components/ui/Button'
import { LogIn } from 'lucide-react'
import useLoginForm from '../hooks/actions/useLoginForm'
import { TriangleAlert } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import useAuth from '../hooks/useAuth'

export default function LoginPage() {
  const { user } = useAuth()
  const { state, loginAction, loading } = useLoginForm()

  if (user) window.location.href = '/'

  return (
    <form className="form" action={loginAction}>
      <h1>ACCESO</h1>

      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />

      <Button icon={<LogIn />}>Iniciar Sesión</Button>

      {state?.error && (
        <span>
          <TriangleAlert size={16} />
          {state.error}
        </span>
      )}

      <p>
        ¿No tienes cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </form>
  )
}
