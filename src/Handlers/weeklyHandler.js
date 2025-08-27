
const { getWeekly } = require("../Controllers/getWeekly");
const postWeekly = require("../Controllers/postWeekly");
const putWeekly = require("../Controllers/putWeekly");


const getWeeklyHandler = async (req, res)=>{

    try {
      const result =  await getWeekly();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postWeeklyHandler = async (req, res) => {
  try {
    const result = await postWeekly();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// actualiza una fila puntual
const putWeeklyHandler = async (req, res) => {
  const { hour } = req.params; 
  const { day, task } = req.body;
  try {
    const updated = await putWeekly(hour, day, task);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getWeeklyHandler, postWeeklyHandler, putWeeklyHandler };