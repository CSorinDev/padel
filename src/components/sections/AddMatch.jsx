import { useState } from 'react'
import Button from '../ui/Button'

export default function AddMatch() {
  return (
    <form className="form gap-4!" action="">
      <div className='grid grid-cols-[auto_1fr] gap-2 items-center'>
        <label htmlFor="datetime">Fecha y Hora</label>
        <input type="datetime-local" name="datetime" id="datetime" />
      </div>

      <div className="grid grid-cols-[auto_1fr] place-items-center gap-2">
        <small className="col-span-2">Equipo 1</small>
        <label htmlFor="player1">Jugador 1</label>
        <input type="text" name="player1" id="player1" />

        <label htmlFor="player2">Jugador 2</label>
        <input type="text" name="player2" id="player2" />
      </div>

      <div className="border-text/10 grid grid-cols-[auto_1fr] place-items-center gap-2">
        <p className="col-span-2">Equipo 2</p>
        <label htmlFor="player3">Jugador 1</label>
        <input type="text" name="player3" id="player3" />

        <label htmlFor="player4">Jugador 2</label>
        <input type="text" name="player4" id="player4" />
      </div>

      <Button>Agregar Partido</Button>
    </form>
  )
}
