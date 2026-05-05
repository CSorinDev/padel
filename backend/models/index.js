import Player from './Player.js'
import Match from './Match.js'
import MatchSet from './MatchSet.js'

// Asociaciones de Jugadores en un Partido
Match.belongsTo(Player, { as: 'player1', foreignKey: 'player1Id' })
Match.belongsTo(Player, { as: 'player2', foreignKey: 'player2Id' })
Match.belongsTo(Player, { as: 'player3', foreignKey: 'player3Id' })
Match.belongsTo(Player, { as: 'player4', foreignKey: 'player4Id' })

// Asociaciones de Resultados (Sets)
Match.hasMany(MatchSet, { as: 'sets', foreignKey: 'matchId' })
MatchSet.belongsTo(Match, { foreignKey: 'matchId' })

export { Player, Match, MatchSet }
