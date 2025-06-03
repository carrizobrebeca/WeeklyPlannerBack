const getUser = require("../Controllers/getUser");
const postUser = require("../Controllers/postUser");

const getUsersHandler = async (req, res)=>{
    const {name} = req.query;
    try {
      const result = name ? await getUser(name) : await getUser();
      res.status(200).json(result);
    
    } catch (error) {
      
    }
 }
const postUsersHandler = async (req, res) => {
  const { name, userName, city, password, image } = req.body;
  
  try {
    const response = await postUser(name, userName, city, password, image );
    res.status(200).json(response);
      
 } catch (error) {
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
};
