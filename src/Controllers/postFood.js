const { Food } = require("../db");

const HOURS = [
  "Breakfast", "Morning Snack", "Lunch", "Morning Snack", "Dinner"
];
const postFood = async () => {
const existing = await Food.findAll();
  if (existing.length) return existing;

  const records = HOURS.map((hour) => ({ hour }));
  return await Food.bulkCreate(records);
};

module.exports = postFood;