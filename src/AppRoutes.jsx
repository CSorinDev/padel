import { Route, Routes } from 'react-router'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ClasificacionPage from './pages/ClasificacionPage'
import LoginPage from './pages/LoginPage'
import PartidosPage from './pages/PartidosPage'
import RegisterPage from './pages/RegisterPage'
import PublicRoutes from './components/PublicRoutes'
import MyMatchesPage from './pages/MyMatchesPage'
import ProtectedRoutes from './components/ProtectedRoutes'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="partidos" element={<PartidosPage />} />
        <Route path="clasificacion" element={<ClasificacionPage />} />
        <Route element={<PublicRoutes />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="mis-partidos" element={<MyMatchesPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
