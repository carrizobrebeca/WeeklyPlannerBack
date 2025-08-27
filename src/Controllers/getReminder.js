const { Reminder } = require('../db');


const getReminder = async () => {
 
  let whereClause = {}; 
  const reminderDb = await Reminder.findAll({
    where: whereClause
  });
    return reminderDb
 
};

module.exports = {getReminder};


