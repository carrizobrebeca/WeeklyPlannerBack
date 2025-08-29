const { ReminderRow } = require('../db');


const getReminderRow = async () => {
 

   let whereClause = {}; 
  const reminderRowDb = await ReminderRow.findAll({
    where: whereClause
  });
    return reminderRowDb
 
};

module.exports = {getReminderRow};


