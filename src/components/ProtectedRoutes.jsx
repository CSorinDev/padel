import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoutes() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}
