const { Food } = require("../db");


const putFood =async (hour, meal) => {
  const food = await Food.findOne({ where: { hour } });
  if (!food) throw new Error("Hour not found");

  food.meal = meal;
  await food.save();

  return food;
};

module.exports = putFood;