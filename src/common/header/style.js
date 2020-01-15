import styled from 'styled-components'
import logoPic from '../../static/img/logo.png'
export const HeaderWrapper = styled.div`
  postion: relative;
  height:56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top: 0;
  left:0;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size: 100% 100%;
`
export const Nav = styled.div`
  width: 960px;
  height:56px;
  margin:0 auto;
  padding: 0 30px 0 0;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    font-size: 15px;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.special{
    i{
      font-size:20px;
    }
  }
`
export const SeachWrapper = styled.div`
  position:relative;
  float:left;
  .search-icon{
    position:absolute;
    right:5px;
    top:13px;
    width:30px;
    line-height:30px;
    border-radius: 15px;
    text-align:center;
    font-size: 22px;
  }
  &.focused{
    input{
      width: 240px;
    }
    .search-icon{
      color:#fff;
      background:#aaa;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 9px;
  width: 250px;
  left: 20px;
  top: 44px;
  padding: 0 20px;
  border-radius: 4px;
`
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
  cursor: pointer;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  .refresh-icon{
    vertical-align: middle;
    margin-right:2px;
    display:inline-block;
    transition: all .5s linear;
  }
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
  border-radius: 3px;
  cursor:pointer;
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  border:none;
  outline:none;
  padding: 0 35px 0 20px;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  // transition: .3s all linear;
  &::placeholder{
    color:#999;
  }
  &.slide-enter{
    transition: .3s all linear;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: .3s all linear;
  }
  &.slide-exit-active{
    width:160px;
  }
`
export const Adtion = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float: right;
  margin-top:9px;
  margin-right: 20px;
  line-height: 38px;
  text-align:center;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid #ec6149;
  &.reg{
    width:80px;
    color:#ec6149;
  }
  &.writting{
    width:100px;
    color:#fff;
    background-color:#ec6149;
    i{
      margin-right:4px;
      vertical-align:middle;
    }
  }
`
