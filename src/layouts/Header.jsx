import { X } from 'lucide-react'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import useAuth from '../hooks/useAuth'
import { LogOut } from 'lucide-react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { user, logout } = useAuth()

  const navLinks = [
    {
      to: '/',
      label: 'Inicio',
    },
    {
      to: '/partidos',
      label: 'Partidos',
    },
    {
      to: '/clasificacion',
      label: 'Clasificación',
    },
  ]

  if (user) {
    navLinks.push({
      to: '/mis-partidos',
      label: 'Mis Partidos',
    })
  }

  if (!user) {
    navLinks.push({
      to: '/login',
      label: 'Login',
    })
  }

  return (
    <header className="bg-bg relative flex items-center justify-between p-4">
      <NavLink to="/">
        <figure>
          <figcaption className="font-mono text-2xl font-bold tracking-tight uppercase">
            PADEL
          </figcaption>
        </figure>
      </NavLink>

      <button
        className="place-self-end p-1 md:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <Menu /> : <X />}
      </button>

      <nav
        className={`${isNavOpen ? ' scale-100' : ' scale-0'} border-text/10 bg-background absolute top-full right-8 grid max-h-fit origin-top gap-2 rounded-xl border p-12 shadow-xl transition md:static md:flex md:scale-100 md:border-none md:p-0 md:shadow-none`}
      >
        {navLinks.map(({ to, label, icon }) => (
          <NavLink
            key={label}
            onClick={() => setIsNavOpen(false)}
            className={({ isActive }) =>
              `${isActive && 'underline '} px-2 py-1 font-mono text-sm font-bold tracking-wide uppercase decoration-2 underline-offset-4 transition hover:underline`
            }
            to={to}
          >
            {icon ? (
              <span className="border-text/30 flex items-center gap-1 border-l-2 pl-4">
                {icon}
                {label}
              </span>
            ) : (
              label
            )}
          </NavLink>
        ))}
        {user && (
          <button
            onClick={logout}
            className="text-danger flex items-center gap-1 font-mono text-sm font-bold uppercase"
          >
            <LogOut size={16} /> Salir
          </button>
        )}
      </nav>
    </header>
  )
}
