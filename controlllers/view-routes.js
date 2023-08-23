const router = require('express').Router();
const { Post, User, Comment } = require('../models')


router.get("/", async (req,res)=>{
  try{
    const postData=await Post.findAll({
      include:[User]
    })
    const posts= postData.map((post)=>post.get({plain:true}))
    res.render("homepage", {posts})
  }catch(err){
    console.err(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {include: [{model: User}, {model:Comment, include:[{model:User}]}]})

    if (!postData) {
      res.status(404).json({message: 'No post with this id'})
      return
    }

    const post = postData.get({plain: true})


    res.render('blog-post', {post, loggedIn: req.session.loggedIn})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/login", (req,res)=>{
  res.render("login")
})


module.exports = router;