import * as actionCreators from './actionTypes'
const defaultState = {
  focused: false
}
export default (state = defaultState, action ) => {
  let newState = {...state}
  if (action.type === actionCreators.SEARCH_FOCUS) {
    newState.focused = true
  }
  if (action.type === actionCreators.SEARCH_BLUR) {
    newState.focused = false
  }
  return newState
}
