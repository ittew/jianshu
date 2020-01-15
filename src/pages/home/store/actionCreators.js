import axios from 'axios'
import * as actionsType from './actionsType';
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      if (res.data.retCode === '000000') {
        const action = {
          type: actionsType.CHANGE_HOME_DATA,
          topicList: res.data.rspBody.topicList,
          recommendList: res.data.rspBody.recommendList,
          writers: res.data.rspBody.writers,
          articleList: res.data.rspBody.articleList
        }
        dispatch(action)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
export const isShowBackTop = (flag) => ({
  type: actionsType.SHOW_BACKTOP,
  flag
})

