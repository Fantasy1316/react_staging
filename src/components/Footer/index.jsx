import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll = event => {
    this.props.checkedAllTodo(event.target.checked)
  }

  handleDeleteAll = () => {
    this.props.deleteAllFinished()
  }

  render() {
    const finished = this.props.todoLists.filter(item => item.done).length
    const total = this.props.todoLists.length
    return (
      <div className="t-footer d-flex align-items-center mt-4">
        <input
          type="checkbox"
          checked={finished === total && total ? true : false}
          onChange={this.handleCheckAll}
        />
        <p className="t-footer--text flex-fill mb-0 mx-4">
          已完成{finished} / 全部{total}
        </p>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={this.handleDeleteAll}
        >
          Delete All Finished
        </button>
      </div>
    )
  }
}
