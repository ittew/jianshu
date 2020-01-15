import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})
export default (state = defaultState, action ) => {
  // if (action.type === actionCreators.SEARCH_FOCUS) {
  //   // immutable对象色set方法,返回一个全新的对象
  //   return state.set('focused',true)
  // }
  // if (action.type === actionCreators.SEARCH_BLUR) {
  //   return state.set('focused', false)
  // }
  // if (action.type === actionCreators.CHANGE_LIST) {
  //   if (action.data.retCode === "000000" && action.data.rspBody.list.length > 0) {
  //     return state.set('list', action.data.rspBody.list)
  //   }
  // }
  switch (action.type) {
    case actionCreators.SEARCH_FOCUS:
      return state.set('focused', true)
      /* falls through */
    case actionCreators.SEARCH_BLUR:
      return state.set('focused', false)
      /* falls through */
    case actionCreators.CHANGE_SWITCH:
      return state.set('switchFlag', true)
      /* falls through */
    case actionCreators.MOUSE_ENTER:
      return state.set('mouseIn', true)
      /* falls through */
    case actionCreators.MOUSE_LEAVE:
      return state.set('mouseIn', false)
      /* falls through */
    case actionCreators.CHANGE_PAGE:
      return state.set('page', action.page)
      /* falls through */
    case actionCreators.CHANGE_LIST:
      if (action.data.retCode === "000000" && action.data.rspBody.list.length > 0) {
        return state.set('list', action.data.rspBody.list).set('totalPage', Math.ceil(action.data.rspBody.list.length/6))
      }
      /* falls through */
    default:
      return state
      /* falls through */
  }
}
