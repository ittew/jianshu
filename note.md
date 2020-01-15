## 搭建项目
* create-react-app jianshu
* cd jianshu
* npm start
* 使用Styled-Components对css样式管理
```js
// style.js  styled-components 4.x版本将原来的injectGlobal方法用createGlobalStyle替换
import {createGlobalStyle} from 'styled-components';
export const GlobalStyled = createGlobalStyle`
body{
  margin:0;
  padding:0;
  background:red;
}`
// index.js
import React from 'react';
import {GlobalStyled} from './style.js';
class App extends React.Components{
	render(){
    return(
      <div className='App'>
        <GlobalStyled />
      </div>
    )
	}
}
```
* 使用iconfont字体图标


