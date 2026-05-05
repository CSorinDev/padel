import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database.js'

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Match',
    tableName: 'matches',
    timestamps: true,
  }
)

export default Match
