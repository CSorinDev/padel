export default function AddMatchForm() {
  function addMatchAction() {}
  return (
    <form className="form" action={addMatchAction}>
      <input type="datetime-local" name="datetime" id="datetime" />
      <input type="text" name="player1" id="player1" placeholder='Jugador 1' />
      <input type="text" name="player2" id="player2" placeholder='Jugador 2' />
      <input type="text" name="player3" id="player3" placeholder='Jugador 3' />
      <input type="text" name="player4" id="player4" placeholder='Jugador 4' />
      <input type="number" name="set1_score_team1" id="set1_score_team1" placeholder='Set 1 Team 1' />
      <input type="number" name="set1_score_team2" id="set1_score_team2" placeholder='Set 1 Team 2' />
      <input type="number" name="set2_score_team1" id="set2_score_team1" placeholder='Set 2 Team 1' />
      <input type="number" name="set2_score_team2" id="set2_score_team2" placeholder='Set 2 Team 2' />
      <input type="number" name="set3_score_team1" id="set3_score_team1" placeholder='Set 3 Team 1' />
<input type="number" name="set3_score_team2" id="set3_score_team2" />
    </form>
  )
}