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

User.hasMany(Event);
Event.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Event.hasMany(Post);
Post.belongsTo(Event);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Post);
Post.belongsTo(User);

Event.hasMany(Post);
Post.belongsTo(Event);
// Likes (usuario puede dar like a muchos posts, un post tiene muchos likes)
User.belongsToMany(Post, { through: 'Like', as: 'LikedPosts' });
Post.belongsToMany(User, { through: 'Like', as: 'Likers' });

// Followers (auto-relación)
User.belongsToMany(User, {
  through: 'Follow',
  as: 'Followers',
  foreignKey: 'followingId',
  otherKey: 'followerId',
});
User.belongsToMany(User, {
  through: 'Follow',
  as: 'Following',
  foreignKey: 'followerId',
  otherKey: 'followingId',
});
Event.belongsTo(User, { as: 'creator' }); // foreignKey: 'creatorId'
User.hasMany(Event, { as: 'createdEvents', foreignKey: 'creatorId' });
User.belongsToMany(Event, { through: 'UserEvent', as: 'attendingEvents' });
Event.belongsToMany(User, { through: 'UserEvent', as: 'attendees' });
module.exports = {
    ...sequelize.models,
    conn: sequelize,
  };
