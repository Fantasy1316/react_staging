import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="row">
          <Item />
        </div>
      </div>
    )
  }
}
