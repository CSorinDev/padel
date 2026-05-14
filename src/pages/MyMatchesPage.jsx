import { Eye } from 'lucide-react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import AddMatchForm from './sections/Matches/AddMatchForm'

export default function MyMatchesPage() {
  const [activeTab, setActiveTab] = useState('see_matches')

  return (
    <>
      <header className="flex justify-center gap-2">
        <button onClick={() => setActiveTab('see_matches')}>
          Mis Partidos
        </button>
        <button onClick={() => setActiveTab('add_match')}>
          Añadir Partido
        </button>
      </header>

      <section>
        {activeTab === 'see_matches' && <p>viendo</p>}
        {activeTab === 'add_match' && <AddMatchForm />}
      </section>
    </>
  )
}
