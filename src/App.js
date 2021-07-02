import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
// import './App.less'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Main Button</Button>

        <DatePicker />
      </div>
    )
  }
}
