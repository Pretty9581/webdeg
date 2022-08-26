//用户注册
module.exports = (res,conn,username,password) => {
 var sql = "INSERT INTO tb_user(username,password,image,age,sex,info,isAdmin) VALUES(?,?,?,?,?,?,?)"
    conn.query(sql, [username, password,'',0,'','','普通用户'], (err) => {
        if (err) {
            console.log('数据插入失败!', err.message);
            return;
        }
        console.log("数据插入成功!")
        res.json({code:200,message:"用户注册成功!"})
    })
};