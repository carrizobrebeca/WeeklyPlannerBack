const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Comment', {
   id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUIDv4 por defecto
      primaryKey: true, // Establece el ID como clave primaria
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
   
  }, {
    
    timestamps: true, // Deshabilita los timestamps (createdAt y updatedAt)
  });
};
