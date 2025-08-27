const { getIdea } = require("../Controllers/getIdea");
const postIdea = require("../Controllers/postIdea");



const getIdeaHandler = async (req, res)=>{
   
    try {
      const result = await getIdea();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postIdeaHandler = async (req, res) => {
  const { description, detail } = req.body;
  try {
    const response = await postIdea( description, detail);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /Idea:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getIdeaHandler,
  postIdeaHandler,
};
