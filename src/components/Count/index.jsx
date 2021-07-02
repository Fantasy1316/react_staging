import React, { Component } from 'react'
import { Select, Button, Space } from 'antd'

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
    this.setState({ defaultValue: value })
  }

  handlePlus = () => {
    const { defaultValue } = this.state
    this.props.plus(defaultValue)
  }

  handleReduce = () => {
    const { defaultValue } = this.state
    this.props.reduce(defaultValue)
  }

  handlePlusIfOdd = () => {
    const { defaultValue } = this.state
    if (this.props.count % 2 !== 0) {
      this.props.plus(defaultValue)
    }
  }

  handlePlusAsync = () => {
    const { defaultValue } = this.state
    this.props.plusAsync(defaultValue, 500)
  }

  render() {
    console.log(this.props)
    const { defaultValue, options } = this.state
    return (
      <div className="count">
        <h2>Current Count: {this.props.count}</h2>
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
