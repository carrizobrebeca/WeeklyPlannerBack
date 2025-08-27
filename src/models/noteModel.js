const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Note', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
      title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
          description: {
      type: DataTypes.TEXT,
      allowNull: false,
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
