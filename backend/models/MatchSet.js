import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database.js'

class MatchSet extends Model {}

MatchSet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    setNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scoreTeam1: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    scoreTeam2: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'MatchSet',
    tableName: 'match_sets',
    timestamps: false,
  }
)

export default MatchSet
