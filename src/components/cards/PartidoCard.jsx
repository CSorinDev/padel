import { User } from 'lucide-react'

export default function PartidoCard({ partido }) {
  return (
    <article className="border-text/20 box-content w-full max-w-sm rounded-lg border px-8 py-6 shadow-xl">
      <h2 className="font-mono text-xl font-bold uppercase">{`Partido ${partido.id}`}</h2>
      <p className="font-mono text-sm font-bold tracking-tight uppercase mb-8">
        {partido.date}
      </p>

      <table className="w-full">
        <thead>
          <tr className="font-mono text-sm tracking-tight uppercase">
            <th className="px-2 py-1"></th>
            <th className="px-2 py-1"></th>
            <th className="px-2 py-1">Set 1</th>
            <th className="px-2 py-1">Set 2</th>
            <th className="px-2 py-1">Set 3</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-text/10 border-b-2 text-center">
            <td className="px-2 py-1 text-start">
              {partido.player1} <br />
              {partido.player3}
            </td>
            <td></td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set1_score_team1}
            </td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set2_score_team1}
            </td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set3_score_team1}
            </td>
          </tr>

          <tr className="text-center">
            <td className="px-2 py-1 text-start">
              {partido.player2} <br />
              {partido.player4}
            </td>
            <td></td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set1_score_team2}
            </td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set2_score_team2}
            </td>
            <td className={`px-2 py-1 font-mono`}>
              {partido.set3_score_team2}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  )
}
