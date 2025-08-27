const { getNote } = require("../Controllers/getNote");
const postNote = require("../Controllers/postNote");

const getNoteHandler = async (req, res)=>{
   
    try {
      const result = await getNote();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postNoteHandler = async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const response = await postNote( title, date, description);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /Note:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getNoteHandler,
  postNoteHandler,
};
