require("dotenv").config();
const {Sequelize} = require("sequelize");
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Event, Post, Comment, Like, Follow} = sequelize.models;

//cuando borre la db este no va 
// User.belongsToMany(User, {
//   through: 'Follow',
//   as: 'Followers',
//   foreignKey: 'followingId',
//   otherKey: 'followerId',
// });
// User.belongsToMany(User, {
//   through: 'Follow',
//   as: 'Following',
//   foreignKey: 'followerId',
//   otherKey: 'followingId',
// });


//van estos dos de followRequest , mover archovos a model:
User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

// Likes (usuario puede dar like a muchos posts, un post tiene muchos likes)
User.belongsToMany(Post, { through: 'Like', as: 'LikedPosts' });
Post.belongsToMany(User, { through: 'Like', as: 'Likers' });


User.belongsToMany(User, {
  through: 'FollowRequest',
  as: 'FollowRequestsSent',
  foreignKey: 'requesterId',
  otherKey: 'targetId',
});
User.belongsToMany(User, {
  through: 'FollowRequest',
  as: 'FollowRequestsReceived',
  foreignKey: 'targetId',
  otherKey: 'requesterId',
});

// Evento creado por un usuario
User.hasMany(Event, { as: 'createdEvents', foreignKey: 'creatorId' });
Event.belongsTo(User, { as: 'creator', foreignKey: 'creatorId' });

// Usuario invitado a eventos (relación N:M)
User.belongsToMany(Event, { through: 'UserEvent', as: 'attendingEvents' });
Event.belongsToMany(User, { through: 'UserEvent', as: 'attendees' });

// Post en evento
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Event.hasMany(Post, { foreignKey: 'eventId' });
Post.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
  };
