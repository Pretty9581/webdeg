import instance from '../../utils/axios'
// console.log(instance)
const InfoApi = {
    info:'api/user/info'
}

const  UserInfo = (option) =>{
    return instance({
        url:InfoApi.info,
        method:'get',
        params:{
           username:option.username,
           password:option.password,
           image:option.image,
           age:option.age,
           sex:option.sex,
           info:option.info
        }
    })
}

export default UserInfo
