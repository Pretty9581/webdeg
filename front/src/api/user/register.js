import instance from '../../utils/axios'

const registerApi = {
    api:'api/user/register'
}
const userRegister= (username,password) =>{
    return instance({
        url:registerApi.api,
        method:'get',
        params: {
            username:username,
            password:password
        }
    })
}
export default userRegister
