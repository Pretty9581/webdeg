//用户登录
module.exports = (req,res,conn) => {
    var sql = `select  *  from  tb_user where username = '${req.query.username}'`
    conn.query(sql, (err,result) => {
        if (err) {
            console.log('数据查询失败!', err.message);
            return;
        }
        console.log("数据查询成功!",result)
        res.json({code:200,message:"数据查询成功!",data:result})
    })
 };