import axios from 'axios'
import { SessionStorage } from './storage'

let newAxios = axios.create({
  baseURL: 'https://api-barbecue-company.now.sh'
})

newAxios.interceptors.request.use(config => {
  config.headers = config.headers || {}

  const token = SessionStorage.get('TOKEN')

  if (token) {
    config.headers.common['Authorization'] = token
  }

  return config
}, error => Promise.reject(error))

export default newAxios
