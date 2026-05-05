import { Route, Routes } from 'react-router'
import Layout from './features/layouts/Layout'
import HomePage from './pages/HomePage'
import ClasificacionPage from './pages/ClasificacionPage'
import LoginPage from './pages/LoginPage'
import PartidosPage from './pages/PartidosPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="partidos" element={<PartidosPage />} />
        <Route path="clasificacion" element={<ClasificacionPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
