import React, { Component } from 'react'
import { Divider } from 'antd'
import Count from './containers/Count'
import Person from './containers/Person'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Count />
        <Divider />
        <Person />
      </div>
    )
  }
}
