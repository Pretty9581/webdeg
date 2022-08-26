let express = require("express")
let loginRouter = express.Router()
let conn = require("../../db/config")
let UserLogin = require("../../model/user/userLogin")
loginRouter.get("/api/user/login",(req,res)=>{
    console.log(req.query)
    //用户登录
    UserLogin(req,res,conn)
})

loginRouter.get("/api/admin/login",(req,res)=>{
    res.send("管理员登录")
})

module.exports = loginRouter