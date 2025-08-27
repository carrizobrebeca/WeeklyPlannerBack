const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Idea', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
  }, {

    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
