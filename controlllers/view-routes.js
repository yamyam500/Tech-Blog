const router = require('express').Router();
const { Post, User, Comment } = require('../models')



router.get("/login", async (req,res)=>{
 await res.render("login")
})

router.get("/register", async (req,res)=>{
 await res.render("register")
})

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

    if(postData){

      const post = postData.get({plain: true})


     return res.render('blog-post', {post, loggedIn: req.session.loggedIn})

    }
   
  } catch (err) {
    res.status(500).json(err)
  }
})




module.exports = router;