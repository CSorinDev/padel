import { NavLink } from 'react-router'
import Button from '../components/ui/Button'
import { LogIn } from 'lucide-react'
import { Icon } from 'lucide-react'

export default function LoginPage() {
  function handleLoginAction() {
    console.log('Ok')
  }

  return (
    <form className="form" action={handleLoginAction}>
      <h1>ACCESO</h1>

      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />

      <Button icon={<LogIn />}>
        Iniciar Sesión
      </Button>

      <p>
        ¿No tienes cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </form>
  )
}
