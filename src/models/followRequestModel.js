const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('FollowRequest', {
    status: {
      type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
      defaultValue: 'pending',
    },
  });
};

