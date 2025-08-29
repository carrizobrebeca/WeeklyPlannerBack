const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ToDoRow', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    trimeEnd: {
      type: DataTypes.DATE, 
      allowNull: false,
    },
    idToDo: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
