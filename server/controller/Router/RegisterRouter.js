let express = require("express")
let registerRouter = express.Router()
let conn = require("../../db/config")
let UserRegister = require("../../model/user/userRegister")

registerRouter.get("/api/user/register",(req,res)=>{
    console.log(req.query)
    let {username,password} = req.query
    //用户注册 //四个参数 res 数据库连接对象 用户名 密码
    UserRegister(res,conn,username,password);
})

registerRouter.get("/api/admin/register",(req,res)=>{
    // console.log(req.params)
    res.send("管理员注册")
})

//关闭数据库
//conn.end()
module.exports = registerRouter