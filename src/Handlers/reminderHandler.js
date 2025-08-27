const { getReminder } = require("../Controllers/getNote");
const postReminder = require("../Controllers/postReminder");


const getReminderHandler = async (req, res)=>{
   
    try {
      const result = await getReminder();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postReminderHandler = async (req, res) => {
  const { date } = req.body;
  try {
    const response = await postReminder(date);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /Reminder:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getReminderHandler,
  postReminderHandler,
};
