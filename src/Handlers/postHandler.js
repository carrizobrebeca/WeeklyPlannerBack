const { getPost } = require("../Controllers/getPost");
const { getPostEvent } = require("../Controllers/getPostEvent");
const postPost = require("../Controllers/postPost");

const getPostsHandler = async (req, res)=>{
    const {eventId} = req.query;
    try {
      const result = eventId ? await getPostEvent(eventId) : await getPost();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postPostHandler = async (req, res) => {
  const { image, description, userId, eventId } = req.body;
  try {
    const response = await postPost( image, description, userId, eventId );
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getPostsHandler,
  postPostHandler,
};
