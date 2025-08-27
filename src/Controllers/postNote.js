const { Note } = require("../db");

const postNote = async (title, date, description) => {

     return await Note.create({ title, date, description });
};

module.exports = postNote;
