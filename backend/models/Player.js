import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database.js'

class Player extends Model {}

Player.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players', // Forzamos el nombre de la tabla en plural
    timestamps: true, // Crea createdAt y updatedAt automáticamente
  }
)

export default Player
