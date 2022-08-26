let express = require("express")
let loginRouter = express.Router()
let conn = require("../../db/config")
let SelectInfo = require("../../model/user/info/selectInfo")
let changePassword = require("../../model/user/info/changePassword")
loginRouter.get("/api/user/info",(req,res)=>{
    //注册用户信息
    SelectInfo(req,res,conn)
})

loginRouter.get("/api/user/password",(req,res)=>{
    //修改用户密码
    changePassword(req,res,conn)
})
module.exports = loginRouter