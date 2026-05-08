import useAuth from '../hooks/useAuth'

export default function HomePage() {
  const { user } = useAuth()

  if (user?.name) {
    return <p>Hola, {user.name}</p>
  }

  return <p>home page</p>
}
