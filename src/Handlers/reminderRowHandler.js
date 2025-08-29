
const { getReminderRow } = require("../Controllers/getReminderRow");
const { getReminderRowId } = require("../Controllers/getReminderRowId");
const postReminderRow = require("../Controllers/postReminderRow");


const getReminderRowHandler = async (req, res)=>{
   
   const {idReminder} = req.query;
    try {
      const result = date ? await getReminderRowId(idReminder) : await getReminderRow();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
const postReminderRowHandler = async (req, res) => {
  const { name, idReminder, timeStart, timeEnd } = req.body;
  try {
    const response = await postReminderRow(name, idReminder, timeStart, timeEnd);
    res.status(200).json(response);
 } catch (error) {
     console.error("ERROR POST /ReminderRow:", error); 
    res.status(400).json({error: error.message});
 }  
};

module.exports = {
  getReminderRowHandler,
  postReminderRowHandler,
};
