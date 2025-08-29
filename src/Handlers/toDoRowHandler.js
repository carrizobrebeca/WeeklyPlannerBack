
const postToDoRow = require("../Controllers/postToDoRow");
const { getToDoRow } = require("../Controllers/getToDoRow");


const getToDoRowHandler = async (req, res)=>{
const { idToDo } = req.params; 
    try {
      const result =  await getToDoRow(idToDo);
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
 
const postToDoRowHandler = async (req, res) => {
  const { name, trimeEnd, idToDo } = req.body;
  try {
    const response = await postToDoRow( name, trimeEnd, idToDo);
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
