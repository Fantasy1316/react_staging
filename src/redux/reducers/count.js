/**
 * 定义服务于 count 的 reducer， 本质是一个函数（纯函数）
 * @param {any} preState 之前的状态
 * @param {object} action 动作对象
 */

import { PLUS, REDURCE } from '../constant'

// 初始化默认状态
const initState = 0

const countReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case PLUS:
      return preState + data

    case REDURCE:
      return preState - data

    default:
      return preState
  }
}

export default countReducer
