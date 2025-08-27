const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Food', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    hour: {
      type: DataTypes.ENUM("Breakfast", "Morning Snack", "Lunch", "Afternoon Snack", "Evening Snack", "Dinner"),
      allowNull: false
    },
    meal: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
