const { getFood } = require("../Controllers/getFood");
const postFood = require("../Controllers/postFood");
const putFood = require("../Controllers/putFood");



const getFoodHandler = async (req, res)=>{

    try {
      const result =  await getFood();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postFoodHandler = async (req, res) => {
  try {
    const result = await postFood();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// actualiza una fila puntual
const putFoodHandler = async (req, res) => {
  const { hour } = req.params; 
  const { meal } = req.body;
  try {
    const updated = await putFood(hour, meal);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFoodHandler, postFoodHandler, putFoodHandler };