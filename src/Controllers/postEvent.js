const { Event } = require('../db');
const moment = require('moment');
const postEvent = async (name, title, image, type, location, creatorId, eventDate, eventTime) => {
  try {
  //     const formattedDate = moment(eventDate, ['DD-MM-YYYY', 'DD/MM/YYYY']).format('YYYY-MM-DD');
  //  const formattedTime = moment(eventTime, 'HH:mm').format('HH:mm');
  return await Event.create({ name, title, image, type, location, creatorId, eventDate, eventTime});
  } catch (error) {
      console.error("ERROR POST /post:", error); 
  }


};

module.exports = {postEvent};
