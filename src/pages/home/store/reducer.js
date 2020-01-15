
import { fromJS } from 'immutable'
import * as actionsType from './actionsType';

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  writers: [],
  articleList: [],
  showBackTop: false
})
export default (state = defaultState, action ) => {
  switch (action.type) {
    case actionsType.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        writers: fromJS(action.writers),
        articleList: fromJS(action.articleList)
      })
      /* falls through */
    case actionsType.SHOW_BACKTOP:
      return state.set('showBackTop', action.flag)
      /* falls through */
    default:
      return state
  }
}
