/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-14 15:38:43
 * @LastEditTime: 2022-01-15 11:01:14
 * @LastEditors: Liu Shuai
 * @Reference:
 */
const getters = {
  token: (state) => state.user.token,
  hashUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo
}
export default getters
