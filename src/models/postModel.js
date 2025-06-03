const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUIDv4 por defecto
      primaryKey: true, // Establece el ID como clave primaria
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'description' es opcional
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true, // El campo 'imagen' es opcional
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

  }, {

    timestamps: true, //abilita los timestamps (createdAt y updatedAt)
  });
};
