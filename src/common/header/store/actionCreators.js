import * as actionTypes from './actionTypes'
import axios from 'axios';

const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data
})

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})
export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})
export const switchAction = () => ({
  type: actionTypes.CHANGE_SWITCH
})
export const mouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
})
export const changePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
// redux-thunk 异步操作函数
export const getList = () => {
  return (dispacth) => {
    axios.get('/api/headerList.json').then(res=> {
      dispacth(changeListAction(res.data))
    }).catch(res => {
      console.log(res)
    })
  }
}
