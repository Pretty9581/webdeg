import instance from '../../utils/axios'
// console.log(instance)
const pwdApi = {
    pwd:'api/user/password'
}
//username,image,age,sex,info
const  changePwd = (option) =>{
    return instance({
        url:pwdApi.pwd,
        method:'get',
        params:{
           username:option.username,
           password:option.password,
           newPwd:option.newPwd
        }
    })
}

// console.log(UserInfo)

export default changePwd
