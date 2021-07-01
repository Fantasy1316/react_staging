import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props
    return (
      <a href={html_url} className="col mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={avatar_url} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <p className="card-text text-center">{login}</p>
          </div>
        </div>
      </a>
    )
  }
}
