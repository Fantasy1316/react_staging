import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="http://img.fechen.cn/uploadfile/avatar.png"
            className="card-img-top"
            alt="avatar"
          />
          <div className="card-body">
            <p className="card-text text-center">Jay</p>
          </div>
        </div>
      </div>
    )
  }
}
