import axios from 'axios'
import { SessionStorage } from './storage'

let axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.request.use(config => {
  config.headers = config.headers || {}

  const token = SessionStorage.get('TOKEN')

  if (token) {
    config.headers.common['Authorization'] = token
  }

  return config
}, error => Promise.reject(error))

export default axiosInstance
