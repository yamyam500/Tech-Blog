
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const userData=require("./userData.json")
const sequelize=require("../connection/config")
const {User, Post, Comment}=require("../models")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Post.bulkCreate(postData)

  await Comment.bulkCreate(commentData)

  process.exit(0);
};

seedDatabase();