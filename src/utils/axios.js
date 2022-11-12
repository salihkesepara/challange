import axios from 'axios'
import { baseURL } from 'src/utils/config'

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use((config) => {
  config.headers = {
    'Access-Control-Allow-Origin': '*'
  }
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = '/'
      return
    }
    return Promise.reject(error)
  }
)

export default instance
