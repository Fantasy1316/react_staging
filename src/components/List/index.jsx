import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const { isFirst, isLoading, err, usersList } = this.props
    return (
      <div className="list">
        <div className="row">
          {isFirst ? (
            <h3>Enter Username And Search</h3>
          ) : isLoading ? (
            <h3>Loading...</h3>
          ) : err ? (
            <h3 style={{ color: '#f00' }}>{err}</h3>
          ) : (
            usersList.map(item => {
              return <Item {...item} key={item.id} />
            })
          )}
        </div>
      </div>
    )
  }
}
