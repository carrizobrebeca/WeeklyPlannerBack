const { ReminderRow } = require("../db");

const postReminderRow = async ( name, idReminder, timeStart, timeEnd) => {

     return await ReminderRow.create({ name, idReminder, timeStart, timeEnd});
};

module.exports = postReminderRow;
