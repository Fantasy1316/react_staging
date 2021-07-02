import React, { Component } from 'react'
import Count from './containers/Count'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Count />
      </div>
    )
  }
}
