const { Idea } = require("../db");

const postIdea = async ( description, detail) => {

     return await Idea.create({ description, detail});
};

module.exports = postIdea;
