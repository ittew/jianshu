import React from 'react';
import { Globalstyle } from './style'
import { Iconfont } from './static/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={ Home }></Route>
              <Route path="/detail" exact component={ Detail }></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      <Iconfont />
      <Globalstyle />
    </div>
  )
}

export default App;
