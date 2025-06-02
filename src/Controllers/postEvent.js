const { Event } = require('../db');

const postEvent = async (name, title, image, type, location, creatorId) => {

  return await Event.create({ name, title, image, type, location, creatorId });

};

module.exports = {postEvent};
