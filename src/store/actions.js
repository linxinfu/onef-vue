import * as types from './mutation-types'

export const saveUserInfo = ({ commit }, user) => {
  commit(types.SET_USER_INFO, user)
}
