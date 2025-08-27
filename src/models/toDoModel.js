const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ToDo', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
      isFavorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
