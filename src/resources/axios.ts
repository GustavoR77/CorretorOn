import { getToken, removeToken, setToken } from '@/libs/auth';
import axios from 'axios'
import https from 'https'

const myagent = new https.Agent({
  rejectUnauthorized: true
});

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    key: process.env.NEXT_PUBLIC_API_KEY,
    project: process.env.NEXT_PUBLIC_API_PROJECT,
  },

  httpsAgent: myagent,
  withCredentials: false
})

/**
 * Request Interceptor
 */
instance.interceptors.request.use(async request => {
  const token = await getToken()
  request.headers.authorization = String(token)
  return request
})

/**
 * Response Interceptor
 */

const setAuthorization = async (response) => {
  if(response.headers.hasOwnProperty('authorization')) {
    await setToken(String(response.headers.authorization).trim())
  }
}
instance.interceptors.response.use(async response => {
  if (typeof window !== 'undefined') {
    await setAuthorization(response)
  }
  return response
}, async error => {
  if (typeof window !== 'undefined') {
    if(error.response.status === 401) {
      await removeToken()
    }
    await setAuthorization(error.response)
  }
  return Promise.reject(error)
})

export default instance
