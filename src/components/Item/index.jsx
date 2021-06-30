import React, { Component } from 'react'
import './index.scss'

export default class Item extends Component {
  state = {
    mouse: false
  }

  handleStatusChange = (id, event) => {
    this.props.updateTodo(id, event.target.checked)
  }

  handleMouse = flag => {
    this.setState({ mouse: flag })
  }

  handleDelete = id => {
    if (window.confirm('确认删除？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <div
        className="list-group-item d-flex align-items-center"
        onMouseEnter={() => this.handleMouse(true)}
        onMouseLeave={() => this.handleMouse(false)}
      >
        <input
          type="checkbox"
          checked={done}
          onChange={event => this.handleStatusChange(id, event)}
        />
        <p className="flex-fill mb-0 mx-4">{name}</p>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          style={{ display: mouse ? 'inline-block' : 'none' }}
          onClick={() => {
            this.handleDelete(id)
          }}
        >
          Delete
        </button>
      </div>
    )
  }
}
