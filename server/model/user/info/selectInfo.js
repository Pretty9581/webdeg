//用户信息注册
module.exports = (req,res,conn) => {
    let {username,password,image,age,sex,info} = req.query
    var sql = `UPDATE tb_user SET image = ?,age = ?,sex = ?,info = ? WHERE username = '${username}'`
    // var sql = "INSERT INTO tb_user(username,password,image,age,sex,info,isAdmin) VALUES(?,?,?,?,?,?,?)"
    conn.query(sql, [image,age,sex,info], (err) => {
        if (err) {
            console.log('数据插入失败!', err.message);
            return;
        }
        var isAdmin = "普通用户"
        var obj = {
            username:username,
            password:password,
            image:image,
            age:age,
            sex:sex,
            info:info,
            isAdmin:isAdmin
        }
        console.log("数据插入成功!")
        res.send({code:200,message:"个人信息完善成功",data:obj})
    })
};