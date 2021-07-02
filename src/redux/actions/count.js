/**
 * @descript 生成count的action方法
 */

import { PLUS, REDURCE } from '../constant'

// 同步的action （一般的对象）
export const createPlusAction = data => ({ type: PLUS, data })
export const createReduceAction = data => ({ type: REDURCE, data })

// 异步的 action （函数）
export const createPlusAsyncAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createPlusAction(data))
    }, time)
  }
}
