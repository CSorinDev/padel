import PartidoCard from '../components/cards/PartidoCard'
import { Plus } from 'lucide-react'
import { ChartNoAxesColumn } from 'lucide-react'
import { useState } from 'react'
import AddMatch from '../components/sections/AddMatch'
import { Plus } from 'lucide-react'
import { ChartNoAxesColumn } from 'lucide-react'
import { useState } from 'react'
import AddMatch from '../components/sections/AddMatch'

export default function PartidosPage({
  partidos = [
    {
      id: 1,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 2,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 3,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 4,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 5,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 6,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 7,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 8,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
    {
      id: 9,
      date: '12/5/26 10:00',
      player1: 'Wayne Rooney',
      player2: 'Roger',
      player3: 'Yonatan',
      player4: 'Abdeselem',
      set1_score_team1: 6,
      set1_score_team2: 4,
      set2_score_team1: 6,
      set2_score_team2: 4,
      set3_score_team1: 6,
      set3_score_team2: 4,
    },
  ],
}) {
  const [selected, setSelected] = useState('Añadir Partido')
  const headerButtons = [
    {
      icon: <ChartNoAxesColumn size={16} />,
      label: 'Partidos',
    },
    {
      icon: <Plus size={16} />,
      label: 'Añadir Partido',
    },
  ]

  const buttonStyle = `gap-1 px-4 after:h-0.5 after:bg-black after:block after:translate-y-0.5 whitespace-nowrap}`

  const [selected, setSelected] = useState('Añadir Partido')
  const headerButtons = [
    {
      icon: <ChartNoAxesColumn size={16} />,
      label: 'Partidos',
    },
    {
      icon: <Plus size={16} />,
      label: 'Añadir Partido',
    },
  ]

  const buttonStyle = `gap-1 px-4 after:h-0.5 after:bg-black after:block after:translate-y-0.5 whitespace-nowrap}`

  return (
    <>
      <header className="border-text/10 mx-auto mb-12 flex w-fit items-center gap-2 border-b-2 px-12">
        {headerButtons.map(({ icon, label }) => (
          <button
            onClick={() => setSelected(label)}
            className={`${buttonStyle} ${selected === label ? 'font-bold after:w-full' : 'after:w-0'} `}
          >
            {/* {icon ? icon : null} */}
            {/* {label} */}
            {label}
            {` `}
          </button>
        ))}
      </header>

      <section className="flex flex-wrap justify-center gap-8">
        {selected === 'Partidos' ? (
          partidos.map((p) => <PartidoCard key={p.id} partido={p} />)
        ) : (
          <AddMatch />
        )}
      </section>
    </>
  )
}
