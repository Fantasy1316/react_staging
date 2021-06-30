import React, { Component } from 'react'
import propTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  static propTypes = {
    addTodo: propTypes.func.isRequired
  }

  // 处理回车键抬起事件
  handleKeyUp = event => {
    const { keyCode, target } = event
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('请输入任务名称')
      return
    }
    const todo = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(todo)
    target.value = ''
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="请输入您的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}
