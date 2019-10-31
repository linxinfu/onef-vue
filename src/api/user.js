import request from './axios.js'

// 用户登录
export async function login(username, password) {
  var data = {
    url: '/user/login',
    method: 'post',
    data: { username: username, password: password }
  }
  return request(data)
}
