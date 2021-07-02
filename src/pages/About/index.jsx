import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import CusNavLink from '../../components/CusNavLink'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <CusNavLink to="/about/news">news</CusNavLink>
          </li>
          <li className="nav-item">
            <CusNavLink to="/about/message">message</CusNavLink>
          </li>
        </ul>
        <div className="cont">
          <Switch>
            <Route path="/about/news" component={News} />
            <Route path="/about/message" component={Message} />
            <Redirect to="/about/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
