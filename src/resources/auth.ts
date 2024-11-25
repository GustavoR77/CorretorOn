import axios from './axios'
import {setToken, getToken} from "../libs/auth";

export default class AuthResource {

    static login(data) {
        return (new Promise( async function(resolve, reject){
            await axios.post('/auth', data).then(async (resp) => {
                await setToken(resp.data.token)
                resolve(resp.data)
            }).catch((e) => reject(e))
        }))
    }

    static logout(data) {
        return axios.delete('/auth', data)
    }

    static me() {
        return axios.get('/auth')
    }

    static register(data) {
        return axios.post('/user', data)
    }

    static forgotPassword(data) {
        return axios.post('/auth/forgot-password', data)
    }

    static resetPassword(data) {
        return axios.post('/auth/reset-password', data)
    }


}