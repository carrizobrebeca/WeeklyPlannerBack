const { getToDo } = require("../Controllers/getToDo");
const postToDo = require("../Controllers/postToDo");

const getToDoHandler = async (req, res)=>{

    try {
      const result =  await getToDo();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
 
const postToDoHandler = async (req, res) => {
  const { title } = req.body;
  try {
    const response = await postToDo( title);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /ToDo:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getToDoHandler,
  postToDoHandler,
};
