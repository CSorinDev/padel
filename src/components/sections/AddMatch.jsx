import { useState } from 'react'
import Button from '../ui/Button'

export default function AddMatch() {
  return (
    <form className="form" action="">
      <label htmlFor="datetime">Fecha y Hora</label>
      <input type="datetime-local" name="datetime" id="datetime" />

      <label htmlFor="player1">
        Jugador 1 <small className='text-red-600'>(equipo 1)</small>
      </label>
      <input type="text" name="player1" id="player1" />

      <label htmlFor="player2">
        Jugador 2 <small className='text-red-600'>(equipo 1)</small>
      </label>
      <input type="text" name="player2" id="player2" />

      <label htmlFor="player3">
        Jugador 1 <small className='text-blue-600'>(equipo 2)</small>
      </label>
      <input type="text" name="player3" id="player3" />

      <label htmlFor="player4">
        Jugador 2 <small className='text-blue-600'>(equipo 2)</small>
      </label>
      <input type="text" name="player4" id="player4" />

      <Button>Agregar Partido</Button>
    </form>
  )
}
