//用户信息注册
module.exports = (req,res,conn) => {
    let {username,newPwd} = req.query
    var sql = `UPDATE tb_user SET password = ? WHERE username = '${username}'`
    // var sql = "INSERT INTO tb_user(username,password,image,age,sex,info,isAdmin) VALUES(?,?,?,?,?,?,?)"
        conn.query(sql, [newPwd], (err,result) => {
            if (err) {
                console.log('数据更新失败!', err.message);
                return;
            }
            console.log("密码修改成功!",result)
            res.send({code:200,message:"密码修改成功!",data:newPwd
        })
    })
};