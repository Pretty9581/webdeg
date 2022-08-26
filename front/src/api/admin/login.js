import {instance} from '../../utils/axios'

const loginApi = {
    login:'api/admin/login'
}
const adminLogin = (params) =>{
    return instance({
        url:loginApi.login,
        method:'get',
        params: params
    })
}
module.exports = {
    adminLogin
}