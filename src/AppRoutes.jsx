import { Route, Routes } from 'react-router'
import Layout from './features/layouts/Layout'
import HomePage from './pages/HomePage'
import MatchesPage from './pages/MatchesPage'
import RankingPage from './pages/RankingPage'
import LoginPage from './pages/LoginPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="partidos" element={<MatchesPage />} />
        <Route path="clasificacion" element={<RankingPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
