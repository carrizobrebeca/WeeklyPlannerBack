const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    creatorId: {
      type: DataTypes.UUID,
      allowNull: false,
    }

  }, {

    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
