const { getEvent } = require("../Controllers/getEvent");
const { postEvent } = require("../Controllers/postEvent");

const getEventHandler = async (req, res)=>{
    const {name} = req.query;
    try {
      const result = name ? await getEvent(name) : await getEvent();
      res.status(200).json(result);
    } catch (error) {
       res.status(400).json({error: error.message});
    }
 }
 const postEventHandler = async (req, res)=>{
 const {name, title, image, type, location, creatorId } = req.body;
 try {
    const response = await postEvent(name, title, image, type, location, creatorId );
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }  

}
 
module.exports= {
    postEventHandler,
    getEventHandler
}