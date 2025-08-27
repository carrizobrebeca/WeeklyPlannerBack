const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ReminderRow', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeStart: {
      type: DataTypes.TIME, // Solo la hora (HH:mm:ss)
      allowNull: false,
    },
   timeEnd: {
      type: DataTypes.TIME, // Solo la hora (HH:mm:ss)
      allowNull: false,
    },
    idReminder: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
