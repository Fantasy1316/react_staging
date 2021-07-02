import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CusNavLink from './components/CusNavLink'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <div className="list-group">
              <CusNavLink to="/home">Home</CusNavLink>
              <CusNavLink to="/about">About</CusNavLink>
            </div>
          </div>
          <div className="col-8">
            {/* Switch <Switch>不会迭代它下面的所有<Route>子组件，并只渲染第一个路径匹配的<Route> */}
            {/* exact 开启严格匹配， 只有当to， path 相同时才能打开页面组件 */}
            {/* Redirect 路由重定向 一般在路由最下面，当无法匹配是跳转到 Redirect to 的页面 */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
