import { Outlet } from 'react-router'
import Header from './Header'

export default function Layout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] gap-y-8">
      <Header />
      <main className="place-self-start p-4">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}
