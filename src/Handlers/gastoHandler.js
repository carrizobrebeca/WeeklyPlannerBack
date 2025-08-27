const { getDateGasto } = require("../Controllers/getDateGasto");
const { getGasto } = require("../Controllers/getGasto");
const postGasto = require("../Controllers/postGasto");


const getGastoHandler = async (req, res)=>{
    const {date} = req.query;
    try {
      const result = date ? await getDateGasto(date) : await getGasto();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postGastoHandler = async (req, res) => {
  const { category, description, date, price, detail } = req.body;
  try {
    const response = await postGasto( category, description, date, price, detail);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /Gasto:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getGastoHandler,
  postGastoHandler,
};
