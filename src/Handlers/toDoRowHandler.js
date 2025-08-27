
const postToDoRow = require("../Controllers/postToDoRow");
const { getToDoRow } = require("../Controllers/getToDoRow");


const getToDoRowHandler = async (req, res)=>{

    try {
      const result =  await getToDoRow();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
 
const postToDoRowHandler = async (req, res) => {
  const { title } = req.body;
  try {
    const response = await postToDoRow( title);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /ToDo:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getToDoRowHandler,
  postToDoRowHandler,
};
