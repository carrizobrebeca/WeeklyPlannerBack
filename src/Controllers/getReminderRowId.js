const { ReminderRow } = require('../db');


const getReminderRowId = async (idReminder) => {
 

  const reminderRowDb = await ReminderRow.findAll({
    where: {
      idReminder: idReminder
    }
  });
  return reminderRowDb;
 
};

module.exports = {getReminderRowId};


