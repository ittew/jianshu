
## React简介
>Facebook在 `2013年5月` 推出的开源的函数式编程的前端框架

## React开发环境的搭建
* `npm i create-react-app -g`  全局安装`Create-react-app`脚手架
* `create-react-app my-app` 使用脚手架初始化项目
* `cd my-app`  进入工程目录
* `npm start`  启动项目

## React 特征
* 声明式开发
* 组件化
* 单向数据流
* 视图层框架
* 函数式编程

## React基础
* react 双向绑定 和 插值用 {}  `{this.state.inputValue}`
* react 实现类似双向绑定是 state或props发生改变, render函数就会重新执行
```js
// 受控组件  form表单元素 value受 state 控制  只能通过 setState 修改
import React, { Component } from 'react'
class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { inputValue: '' }
  }
  render(){
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.changeInput.bind(this)} />
        <div>{this.state.inputValue}</div>
      </div>
    )
  }
  changeInput(e){
    this.setState({ inputValue: e.target.value })
  }
}
// 非受控组件 通过 ref 控制 表单元素值不受state控制
import React, { Component } from 'react'
class Todo extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <input value={this.state.inputValue}
          ref={(textInput) => {this.textInput = textInput}}
        />
        <div>{this.textInput}</div>
      </div>
    )
  }
}
export default Todo
```

* 事件绑定 onClick 事件名大写 JSX使用变量 {变量}
```js
<button onClick={this.btnHandle.bind(this)} >提交</button>
```
* props 属性  组将像一个函数，接受特定得输出，但不能修改
* state 状态  组件内部得数据，可以动态改变 this.setState()更新state得唯一路径

* 注释
```jsx
{
  //todolist deomo  注释方法一 单行注释必须换行写
}
{/* todolistdemo 注释方法二 */}
```

* Fragment  占位符不会在页面中渲染出来
```js
import React, {Fragment} from 'react'
<Fragment>
  <div className="box" ref = 'box'></div>
</Fragment>
```

* class必须写成classname
```jsx
<input className = "input" />
```

* 展示html标签
```jsx
 <li
  dangerouslySetInnerHTML = {{__html: item}}
></li>
```

* 使用htmlFor代替label中的for
```jsx
<label htmlFor="ipt">关联input</label>
<input id = "ipt" className = "input" />
```

* 组件使用及父子组件传值
```jsx
/* 父组件 */
// 引入
import TodoItemList from './TodoItemList'
// 使用 传值
<TodoItemList list = {this.state.list}  deleteItem = {this.handleItem.bind(this)}/>

/* 子组件 */
// props 接收父组件属性传入的值
render () {
  return (
    <ul>
      {
        this.props.list.map((item, index) => {
          return <li onClick = {this.handleItem.bind(this, index)}>{item}</li>
        })
      }
    </ul>
  )
}
handleItem (index) {
  // 调用父组件方法
  this.props.deleteItem(index)
}
```

* context 提供了在组件中共享值得方法 不必通过props单向传递
```js
// theme-context.js  创建context对象
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext
// app.js
import ThemeContext from './theme-context'
import ThemeBar from './component/ThemeBar'
const themes = {
  light: { className: 'btn btn-primary', bgColor: '#333333'},
  dark: { className: 'btn btn-light', bgColor: '#eeeeee'}
}
// 使用 ThemeContext.Provider 包裹
<ThemeContext.Provider value={themes[this.state.theme]}>
  <button className="btn btn-light"
    onClick={() => { this.setState({theme: 'light'})}}
  >浅色主题</button>
  <button className="btn btn-secondary"
    onClick={() => { this.setState({theme: 'dark'})}}
  >深色主题</button>
  <ThemeBar />
</ThemeContext.Provider>
// ThemeBar.js
import React from 'react'
import ThemeContext from '../theme-context';
const ThemeBar = () => {
  return (
    <ThemeContext.Consumer>
      { theme => {
        return (
          <div className="alert mt-5" style={{backgroundColor:theme.bgColor,color:theme.color}}>
            <p>样式区域</p>
            <button className={theme.className}>样式按钮</button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default ThemeBar
```

* 无状态组件只有render函数 它就是一个函数 无状态组件性能高
```js
import React from 'react'
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
  return (
    <div className="todo">
      <div className="input-box">
        <Input  placeholder="Basic usage" value={ props.inputValue } onChange={ props.InpuChange }/>
        <Button type="primary" onClick={ props.buttonClick }>todo</Button>
      </div>
      <List size="small" bordered dataSource={ props.list }
        renderItem={ (item,index) =>
          <List.Item onClick={() => { props.itemDeleteHandle(index)}}>{ item }</List.Item>
        }
      />
    </div>
  )
}
export default TodoListUI
```


* props类型检查与默认值
[Typechecking With PropTypes – React](https://reactjs.org/docs/typechecking-with-proptypes.html)
```jsx
import PropTypes from 'prop-types'
// 类型校验
MyComponent.propTypes = {
  list: PropTypes.oneofType([Proptypes.array, Proptypes.string]),
  deleteItem: PropTypes.func,
  test: PropTypes.string.isRequired
}
// 默认值
MyComponent.defaultProps = {
  test: 'test'
}
```

*  props,state与render函数的关系
```jsx
// 1. 当组件的state或者props发生改变时, render函数就会重新执行
// 2. 当父组件的render函数被执行时, 它的子组件的render都将被重新执行
```

## 虚拟DOM
>虚拟DOM就是一个JS对象, 用它来描述真实的DOM

`优点:`
`1. 大大的提升了性能(减少了真实DOM的创建与对比,虚拟DOM创建的是js对象)`
`2. 它使得跨端应用得以实现. React Native`
```js
// JSX --> createElement --> 虚拟DOM(JS对象) --> 真实DOM
// 虚拟DOM中的Diff算法  虚拟DOM同层比对   DOM key值相同比对
真实DOM
/*
1. state数据
2. JSX 模板
3. 数据 + 模板 结合, 生成真实的DOM 来显示
4. state 发生改变
5. 数据 + 模板 结合生成真实的DOM, 替换原始的DOM
缺陷: 第一次生成完整DOM  第二次生成完整DOM 用第二次DOM替换第一次DOM, 非常耗性能
*/

虚拟DOM
/*
1. state 数据
2. JSX 模板
3. 数据 + 模板生成虚拟DOM
['div', {id: 'test'}, ['span', {} ,'hello world']]
4. 用虚拟DOM的结构生成真实的DOM,来显示
<div id="test"><span>hello world</span></div>
5. state 发生变化
6. 数据 + 模板生成新的虚拟DOM
['div', {id: 'test'}, ['span', {} ,'hi react']]
7. 比较原始虚拟DOM和新的虚拟DOM区别, 找到区别是span中的内容变化
8. 直接操作DOM, 改变span中的内容
*/
```

* ref的使用 获取DOM元素
```jsx
// ref 是箭头函数   this.input 指向 input DOM对象
// setState是异步函数  在获取DOM对象会有问题
<input  ref = {(input) => {this.input = input}} />
this.setState({
  inputValue: this.input.value
})
```

* setState是异步函数  第二个参数解决 异步导致DOM获取问题
```js
this.setState(prevState => ({
  list: [...this.state.list,this.state.inputValue],
  inputValue: ''
}), () => {
  console.log(this.ul.querySelectorAll('div').length)
})
```

## React 生命周期函数
![React 生命周期函数](./React生命周期.png)
`生命周期函数是指在某一时刻组件会自动调用执行的函数`
**Mountting阶段**
`componentWillMount`: 组件即将被挂载(render)到页面的时刻自动执行(第一次挂载执行)
`componentDidMount`: 组件在被挂载(render)到页面之后自动执行render之后(第一次挂载执行)
**Updation阶段**
`更新的三种情形： New props    setState()  fourceUpdate`
`shouldComponentUpdate`: 组件被更新之前自动执行,是否需要更新,必须返回布尔值
`componentWillUpdate`: 组件在被更新之前自动执行,但它在*shouldComponentUpdate*之后执行,如果*shouldComponentUpdate*返回*true*它才会执行,如果返回*false*,它不会执行
`componentDidUpdate`: 组件更新完成之后自动执行 (React更新DOM和refs会触发)
`componentWillReceiveProps`: 组件接收参数之前自动执行,需要满足两个条件,子组件要从父组件接收参数,且子组件以前已经存在于父组件中,才会执行,不能是第一次存在
**Unmountting**
`componentWillUnmount`: 当这个组件即将被从页面中剔除(卸载)的时候,自动执行
```jsx
// 当父组件的render函数被执行时, 它的子组件的render都将被重新执行
// shouldComponentUpdate 避免子组件无谓的render渲染
shouldComponentUpdate (nextProps, nextState) {
  console.log(nextProps)
  if (nextProps.list !== this.props.list) {
    return true
  } else {
    return false
  }
}
```

* react 性能优化
```jsx
// 1. this的绑定放在constructor里面
constructor (props) {
  super(props)
  this.handleButton = this.handleButton.bind(this)
}
// 2. setState异步函数将多次数据改变结合成一次执行
// 3. 虚拟DOM同层匹配 diff算法
// 4. 使用shouldComponentUpdate避免子组件无谓的render渲染
// 5. ajax最好放在componentDidMount中
```

* 安装React Developer Tools chrome调试工具 调试react应用

## React 动画
* 使用react-transition-group实现动画 `npm i react-transition-group -S`
* 使用CSSTransition实现单个元素过渡
```js
import { CSSTransition } from 'react-transition-group'
// in 控制变量  timeout 时长   classNames 自定义class前缀 test-enter
// unmountOnExit 是否隐藏dom   appear 是否首次也应用过渡
// onEntered 过渡完成事件
<CSSTransition
  in={this.state.status}
  timeout={1000}
  classNames="test"
  unmountOnExit
  appear={true}
  onEntered={(el)=>{ el.style.color = "blue"}}
>
  <p>过渡{this.state.status?'显示':'隐藏'}</p>
</CSSTransition>
// transition.css
.test-enter, .test-appear{ opacity: 0; }
.test-enter-active,.test-appear-active{ opacity: 1;transition: opacity 1s ease-in}
.test-enter-done{ opacity: 1;}
.test-exit{ opacity: 1; }
.test-exit-active{ opacity: 0;transition: opacity 1s ease-in }
.test-exit-done{ opacity: 0; }
```
* 使用TransitionGroup + CSSTransition 实现一组或多个元素过渡
```js
import { CSSTransition, TransitionGroup } from 'react-transition-group'
<TransitionGroup>
  {
    this.state.list.map((item, index) => {
      return (
        <CSSTransition
          timeout={1000}
          classNames="test"
          unmountOnExit
          appear={true}
          key={index}
          onEntered={(el)=>{ el.style.color = "blue"}}
        >
          <li>{item}</li>
        </CSSTransition>
      )
    })
  }
</TransitionGroup>
```


## Charles实现本地数据mock模拟
* 安装 windows 版charles [官网下载地址](https://www.charlesproxy.com/download/)

## Redux
`Redux Flow` redux 工作流
![Redux Flow](./ReduxFlow.png)
`注: react组件要改变store里面的数据,首先要dispatch(派发)一个action,传递给store,然后store再把之前的state数据和action转发给reducer函数,reducer接收到action和state之后,做一些处理,然后返回一个新的state(newState)给store, 之后store用新的state替换掉之前旧的state数据,store数据改变后, react组件感知到store数据改变,然后从store重新取数据,更新组件的内容,页面发生变化.`
* 安装 Redux `npm i redux`
* 创建 state容器
* 创建 reducer 必须一个函数
* 在state中引入reducer
```js
// store/index.js
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store

// store/reducer.js
const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  return state
}

// 创建action todolist.js
// input绑定  onChange={this.InpuChange.bind(this)}
InpuChange (e) {
  const action = { // 定义action
    type: 'change_input_value',
    value: e.target.value
  }
  store.dispatch(action) // 派发action给reducer
}

// store/reducer.js reducer接收action
export default (state = defaultState, action) => {
  console.log(state, action);
  if (action.type == 'change_input_value') {
    // 拷贝一份state reducer可以接收state, 但是建议不要直接修改state
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState  //返回给store
  }
  return state
}
// store进行数据替换 store中的state数据变化
// todolist.js  更新组件页面数据
store.subscribe(this.changeStore.bind(this)) // 订阅store的改变
changeStore () {
  this.setState(store.getState()) // 重新获取store中state数据
}
```

* 在chrome应用商店 搜索并安装 Redux DevTools Chrome 调试Redux
```js
// 在store.index.js 中创建store时加入这句
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```
* 添加actionTypes.js的意义在于  用常量去表示action类型, 在dispacth和reducer中action.type不一致导致字符串不报错难以排查问题, 使用常量如果写错会报错, 且便于修改action的名称,只需要修改定时的action值即可
```js
// actionTypes.js
export const CHANGE_INPUT_VALUE = 'change_input_value'
export const ADD_TODO_ITEM = 'add_todo_item'
export const DELETE_TODO_ITEM = 'delete_todo_item'

// reducer.js
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
export default (state = defaultState, action) => {
  // store 和 input的value实现响应   reducer可以接收state,
  if (action.type === CHANGE_INPUT_VALUE) {
    // 拷贝一份state 一定不能直接修改state 需要返回一个新的state数据
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
}

// todoList.js
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
InpuChange (e) {
  const action = {
    type: CHANGE_INPUT_VALUE,
    value: e.target.value
  }
  store.dispatch(action)
}
```

* 使用actionCreator统一创建action
```js
// actionCreators.js
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
export const getChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
// TodoList.js
import { getChangeInputValue, getAddTodoItem, getDeleteItem } from './store/actionCreators'
InpuChange(e) {
  store.dispatch(getChangeInputValue(e.target.value))
}
buttonClick() {
  store.dispatch(getAddTodoItem())
}
itemDeleteHandle(index) {
  store.dispatch(getDeleteItem(index))
}
```

* combineReducers对reducer进行拆分管理
```js
// /common/header/store/reducer.js
const defaultState = {
  focused: false
}
export default (state = defaultState, action ) => {
  let newState = {...state} // 拷贝新对象
  if (action.type === 'focus_input') {
    newState.focused = true
  }
  if (action.type === 'blur_input') {
    newState.focused = false
  }
  return newState
}
// /store/reducer.js
import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
// header/index.js
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
```
* 使用Immutable.js来管理store中的state数据使其不可更改
`npm i immutable`
```js
// header/reducer.js
import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})
export default (state = defaultState, action ) => {
  if (action.type === actionCreators.SEARCH_FOCUS) {
    // immutable对象色set方法,返回一个全新的对象
    return state.set('focused',true)
  }
  if (action.type === actionCreators.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
// heade/index.js
const mapStateToProps = (state) => {
  return {
    // 使用get()获取immutable对象下的state属性
    focused: state.header.get('focused')
  }
}
```

* 使用redux-immutable统一数据格式
`npm i redux-immutable`
```js
// /store/reducer.js
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import headerReducer from '../common/header/store/reducer'
const reducer = combineReducers({
  header: headerReducer
})
export default reducer
// heade/index.js
const mapStateToProps = (state) => {
  return {
    // 使用get()获取immutable对象下的state属性
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']
  }
}
```


* redux的三要素  store是唯一的   只有store能够改变自己的内容   Reducer必须是纯函数
* 纯函数指的是,给固定的输入,就一定会有固定的输出,而且不会有任何的副作用

## 使用Redux-thunk中间件实现ajax请求(实际上是对dispatch的升级)
* npm i redux-thunk -S
* 在创建redux时,配置redux-thunk,redux-devtools
```js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(reducer, enhancer)
export default store
```
* 在`actionCreator`创建action，就可以使用函数作为返回值了
```js
// actionCreator.js
export const initTodoList = (data) => ({
  type: INIT_TODOLIST,
  data
})
export const getTodoList = () => {
  // 接收 dispatch 参数，直接使用，相当于调用store.dispatch方法
  return (dispatch) => {
    axios.get('/list.json').then( res => {
      console.log(res.data)
      dispatch(initTodoList(res.data))
    })
  }
}
```
* 在组件`componentDidMount`钩子函数中调用getTodoList
```js
componentDidMount () {
  store.dispatch(getTodoList())
}
```
* reducer接收store转发的state和action，处理改变state
```js
// reducer.js
export default (state = defaultState, action) => {
  if (action.type === INIT_TODOLIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
}
```

## 使用Redux-saga中间件处理异步请求
* npm i redux-saga -S
* 在创建redux时,配置redux-saga,redux-devtools
```js
// index.js  redux
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSaga from './todoSaga' // saga文件处理异步请求  必须是一个generator函数
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSaga) // 执行todosaga
export default store;
```

* 在`actionCreator`创建action 在`actionTypes`创建常量`GET_INIT_LIST`
```js
// actionTypes.js
export const GET_INIT_LIST = 'get_init_list'
// actionCreator.js
export const getInitList = () => ({
  type: GET_INIT_LIST
})
```

* 创建todoSaga.js文件
```js
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initTodoList } from './actionCreators'
function* fetchList () {
  try {
    const res = yield axios.get('/list.json')
    yield put(initTodoList(res.data))
  } catch (err) {
    consoloe.log(err)
  }
}
function* todoSaga () {
  yield takeEvery(GET_INIT_LIST, fetchList)
}
export default todoSaga
```

* 在组件`componentDidMount`钩子函数中调用getInitList
```js
import { getInitList } from './store/actionCreators'
componentDidMount () {
  store.dispatch(getInitList())
}
```

* reducer接收store转发的state和action，处理改变state
```js
// reducer.js
export default (state = defaultState, action) => {
  if (action.type === INIT_TODOLIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
}
```

## React-redux的作用是为了在项目中使用Redux更加方便。
* `npm install --save react-redux`
* 使用 `Provider` 提供器包裹组件
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import Todo from './Todo'
const App = (
  <Provider store={store}>
    <Todo />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
```
* 使用 `connect` 将组件和`store`连接起来
```js
// Todo.js
import React from 'react'
import { connect } from 'react-redux'
class Todo extends React.Component {
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>提交</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { inputValue: state.inputValue }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      dispatch({
        type: 'change_input_value',
        value: e.target.value
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
```
* reducer接收store转发的state和action，处理改变state
```js
// reducer.js
const defaultState = {
  inputValue: ''
}
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
}
```

## react 路由
* 安装 `npm i react-router-dom`
```js
// 引入
import { BrowserRouter, Route } from 'react-router-dom'
// 使用 exact path必须相等  Route必须用元素包裹
<BrowserRouter>
  <div>
    <Route path="/" exact component={ Home }></Route>
    <Route path="/detail" exact component={ Detail }></Route>
  </div>
</BrowserRouter>
```
