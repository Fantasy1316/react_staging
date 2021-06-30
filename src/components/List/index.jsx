import React, { Component } from 'react'
import propTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    todoLists: propTypes.array.isRequired,
    updateTodo: propTypes.func.isRequired,
    deleteTodo: propTypes.func.isRequired
  }

  render() {
    const { todoLists, updateTodo, deleteTodo } = this.props
    return (
      <div className="list-group">
        {todoLists.map(item => {
          return (
            <Item
              {...item}
              key={item.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </div>
    )
  }
}
