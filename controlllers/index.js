const router = require('express').Router();
const homeRoutes=require("./view-routes")
const dashRoutes=require("./write-routes")
const apiRoutes=require("./api")

router.use("/", homeRoutes)
router.use("/dashboard", dashRoutes)
router.use("/api", apiRoutes)


module.exports=router