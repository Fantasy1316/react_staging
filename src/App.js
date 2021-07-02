import React, { Component } from 'react'
import { Select, Button, Space } from 'antd'
import store from './redux/store'
import {
  createPlusAction,
  createReduceAction,
  createPlusAsyncAction
} from './redux/action_creator'

import './App.less'

const { Option } = Select

export default class App extends Component {
  state = {
    defaultValue: 0,
    options: [1, 3, 5, 7, 9]
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  handleSelectChange = value => {
    console.log('defaultValue change ==>', value)
    this.setState({ defaultValue: value })
  }

  handlePlus = () => {
    const { defaultValue } = this.state
    store.dispatch(createPlusAction(defaultValue))
    console.log('defaultValue ==>', defaultValue)
  }

  handleReduce = () => {
    const { defaultValue } = this.state
    store.dispatch(createReduceAction(defaultValue))
  }

  handlePlusIfOdd = () => {
    const { defaultValue } = this.state
    const count = store.getState()

    if (count % 2 !== 0) {
      store.dispatch(createPlusAction(defaultValue))
    }
  }

  handlePlusAsync = () => {
    const { defaultValue } = this.state
    store.dispatch(createPlusAsyncAction(defaultValue, 500))
  }

  render() {
    const { defaultValue, options } = this.state
    return (
      <div className="container">
        <h2>Current Count: {store.getState()}</h2>
        <Space>
          <Select
            defaultValue={defaultValue}
            style={{ width: 120 }}
            onChange={this.handleSelectChange}
          >
            {options.map(item => {
              return (
                <Option value={item} key={item}>
                  {item}
                </Option>
              )
            })}
          </Select>

          <Button type="primary" onClick={this.handlePlus}>
            Plus
          </Button>
          <Button type="danger" onClick={this.handleReduce}>
            Reduce
          </Button>

          <Button type="primary" onClick={this.handlePlusIfOdd}>
            Plus IF Odd
          </Button>
          <Button type="danger" onClick={this.handlePlusAsync}>
            Plus Async
          </Button>
        </Space>
      </div>
    )
  }
}
