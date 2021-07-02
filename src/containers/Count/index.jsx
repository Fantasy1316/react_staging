import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Button, Space } from 'antd'
import {
  createPlusAction,
  createReduceAction,
  createPlusAsyncAction
} from '../../redux/action_creator'

const { Option } = Select

// 传递状态
// const mapStateToProps = state => {
//   return { count: state }
// }

// 传递操作状态的方法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     plus: value => dispatch(createPlusAction(value)), // 一般写法
//     reduce: value => dispatch(createReduceAction(value)),
//     plusAsync: (value, time) => dispatch(createPlusAsyncAction(value, time))
//   }
// }

class Count extends Component {
  state = {
    defaultValue: 0,
    options: [1, 3, 5, 7, 9]
  }

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

export default connect(state => ({ count: state }), {
  plus: createPlusAction,
  reduce: createReduceAction,
  plusAsync: createPlusAsyncAction
})(Count)
