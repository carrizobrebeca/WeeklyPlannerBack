const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Reminder', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY, // Solo la fecha (YYYY-MM-DD)
      allowNull: false,
    },
        isFavorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
