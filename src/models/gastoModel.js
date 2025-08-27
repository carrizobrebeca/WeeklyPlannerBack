const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Gasto', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category: {
      type: DataTypes.TEXT,
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
    price: {
       type: DataTypes.FLOAT,
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
