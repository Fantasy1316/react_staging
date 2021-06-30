import React, { Component } from 'react'

export default class Search extends Component {
  handleSearch = () => {}

  render() {
    return (
      <div className="bg-light p-4 mb-4 rounded-bottom">
        <h1>Seach Github Users</h1>
        <div className="input-group mb-3" style={{ width: '400px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Username"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}
