import React from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommond from './components/Recommond'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
class Home extends React.Component {
  render(){
    return (
      <HomeWrapper className='clearfix'>
        <HomeLeft>
          <img className='banner' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4866/3867aec8b10cb452ef5ff4448f59c1b335b6af54.png' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommond></Recommond>
          <Writer></Writer>
        </HomeRight>
        { this.props.showBackTop ?<BackTop onClick={ this.backTop }>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.addEventListener('scroll',null)
  }
  backTop () {
    window.scrollTo(0, 0)
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeBackTopShow)
  }
}
const mapState = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeBackTopShow () {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.isShowBackTop(true))
    } else {
      dispatch(actionCreators.isShowBackTop(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home)
