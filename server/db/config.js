var mysql = require("mysql")

//数据库配置信息
var host = "localhost"
var user = "root"
var password = "root"
var db_name = "db_bs"

//创建mysql实例
var conn = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:db_name
})

//连接数据库
conn.connect()

module.exports = conn