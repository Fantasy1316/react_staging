import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'

export default class List extends Component {
  state = {
    usersList: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('SEARCH_INFO', (_, data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { isFirst, isLoading, err, usersList } = this.state
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
