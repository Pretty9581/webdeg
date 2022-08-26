import {instance} from '../../utils/axios'

const registerApi = {
    api:'api/admin/register'
}
const adminRegister= (params) =>{
    return instance({
        url:registerApi.api,
        method:'get',
        params: params
    })
}
module.exports = {
    adminRegister
}