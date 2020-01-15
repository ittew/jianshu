import React from 'react'
import { HeaderWrapper, SeachWrapper, Logo, Nav, NavItem, NavSearch,Adtion,Button,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
class Header extends React.Component {
  render(){
    const { focused, focusHandle, blurHandle, list } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right special'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SeachWrapper className={focused?'focused':''}>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch onFocus={() => focusHandle(list)} onBlur={blurHandle} />
            </CSSTransition>
            <i className="iconfont search-icon">&#58938;</i>
            {this.getListArea()}
          </SeachWrapper>
        </Nav>
        <Adtion>
          <Button className="writting">
            <i className="iconfont">&#58902;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Adtion>
      </HeaderWrapper>
    )
  }
  getListArea = () => {
    const { focused, list, totalPage, switchHandle, mouseIn, page, mouseEnter, mouseLeave} = this.props
    const pageList = []
    if (list.length > 0) {
      const total = list.length
      const len = page === totalPage ? total : page * 6
      for (let i = (page-1) * 6; i< len;i++) {
        pageList.push(
          <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
        )
      }
    }
    if ((focused && list.length >0) || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => switchHandle(page, totalPage, this.icon)}>
            <i className="iconfont refresh-icon" ref={(icon) => {this.icon = icon}}>&#xe603;</i>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.header.get('focused')
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    focusHandle(list){
      dispatch(actionCreators.searchFocusAction())
      list.size === 0 && dispatch(actionCreators.getList())
    },
    blurHandle(){
      dispatch(actionCreators.searchBlurAction())
    },
    switchHandle(page,totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 180) + 'deg)';
      if (page < totalPage) {
        page++
      } else{
        page = 1
      }
      dispatch(actionCreators.changePageAction(page))
    },
    mouseEnter () {
      dispatch(actionCreators.mouseEnterAction())
    },
    mouseLeave () {
      dispatch(actionCreators.mouseLeaveAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

