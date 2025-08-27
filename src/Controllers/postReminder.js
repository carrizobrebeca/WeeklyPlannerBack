const { Reminder } = require("../db");

const postReminder = async ( date) => {

     return await Reminder.create({ date});
};

module.exports = postReminder;
