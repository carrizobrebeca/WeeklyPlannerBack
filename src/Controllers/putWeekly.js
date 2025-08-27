const { Weekly } = require("../db");


const putWeekly =async (hour, day, task) => {
  const weekly = await Weekly.findOne({ where: { hour } });
  if (!weekly) throw new Error("Hour not found");

  weekly.day = day;
  weekly.task = task;
  await weekly.save();

  return weekly;
};

module.exports = putWeekly;