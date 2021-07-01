import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  handleSearch = () => {
    const { value: keyword } = this.keywordElement
    this.props.updateAppState({ isFirst: false, isLoading: true })
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        this.props.updateAppState({
          isLoading: false,
          usersList: res.data.items
        })
      })
      .catch(err => {
        this.props.updateAppState({
          isLoading: false,
          err: err.message
        })
      })
  }

  render() {
    return (
      <div className="bg-light p-4 mb-4 rounded-bottom">
        <h1>Seach Github Users</h1>
        <div className="input-group mb-3" style={{ width: '400px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Username"
            ref={c => (this.keywordElement = c)}
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
