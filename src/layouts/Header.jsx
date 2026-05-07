import { X } from 'lucide-react'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'

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
  {
    to: '/login',
    label: 'Login',
  },
]

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

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
        {navLinks.map(({ to, label }) => (
          <NavLink
          key={label}
            onClick={() => setIsNavOpen(false)}
            className={({ isActive }) =>
              `${isActive && 'underline '} px-2 py-1 font-mono text-sm font-bold tracking-wide uppercase decoration-2 underline-offset-4 transition hover:underline`
            }
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
