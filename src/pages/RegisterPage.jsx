import Button from '../components/ui/Button'
import { NavLink } from 'react-router'

export default function RegisterPage() {
  return (
    <form className="form" action="">
      <h1>Registro</h1>

      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="password2">Repetir Contraseña</label>
      <input type="password" name="password2" id="password2" />

      <Button>Registrarse</Button>

      <p>
        ¿Ya tienes cuenta? <NavLink to="/login">Inicia Sesión</NavLink>
      </p>
    </form>
  )
}
