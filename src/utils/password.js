// 校验密码级别
export const checkPassWord = value => {
  let modelList = ['极弱', '弱', '中', '强', '极强']
  let modes = 0
  if (value.length < 8) return modelList[modes]
  if (/\d/.test(value)) modes++ //如果用户输入的密码 包含了数字
  if (/[a-z]/.test(value)) modes++ //如果用户输入的密码 包含了小写的a到z
  if (/[A-Z]/.test(value)) modes++ //如果用户输入的密码 包含了大写的A到Z
  if (/\W/.test(value)) modes++ //如果是非数字 字母 下划线

  return modelList[modes]
}

// 生成随机密码
export const genKey = (
  hasNumber,
  hasLowerCase,
  hasUpperCase,
  hasSpecialCharacters,
  charUnique,
  len
) => {
  let chars = ''
  let password = ''

  if (hasNumber) chars += '0123456789'
  if (hasLowerCase) chars += 'abcdefghijklmnopqrstuvwxyz'
  if (hasUpperCase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (hasSpecialCharacters) chars += '+*&=_%@,/-'

  let _chars = chars.split('')

  for (let i = 0; i < len; i++) {
    if (_chars.length < 1) break
    let idx = Math.floor(Math.random() * _chars.length)
    password += _chars[idx]
    if (charUnique) _chars.splice(idx, 1)
  }

  return password
}

function rand(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10)
      break
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      break
    default:
      return 0
      break
  }
}
