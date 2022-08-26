import instance from '../../utils/axios'

const loginApi = {
    login:'api/user/login'
}
const userLogin = (opt,opts) =>{
    return instance({
        url:loginApi.login,
        method:'get',
        params: {
            username : opt,
            password : opts
        }
    })
}
export default userLogin
