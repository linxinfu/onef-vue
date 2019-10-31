import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8900/api/v1',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

request.interceptors.request.use(
  req => {
    return req
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
