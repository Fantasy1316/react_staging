import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  handleSearch = async () => {
    const { value: keyword } = this.keywordElement
    PubSub.publish('SEARCH_INFO', {
      isFirst: false,
      isLoading: true
    })
    // 链式调用
    // fetch(`https://api.github.com/search/users?q=${keyword}`)
    //   .then(response => {
    //     console.log('Connect Success: ', response)
    //     return response.json()
    //   })
    //   .then(response => {
    //     console.log('Request Success: ', response)
    //     console.log(response.errors)
    //     if (response.errors) {
    //       return Promise.reject(response.message)
    //     } else {
    //       PubSub.publish('SEARCH_INFO', {
    //         isLoading: false,
    //         err: '',
    //         usersList: response.items
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     console.log('Fetch Error: ', error)
    //     PubSub.publish('SEARCH_INFO', {
    //       isLoading: false,
    //       err: error
    //     })
    //   })

    // async await 调用
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      )
      const data = await response.json()
      if (data.errors) {
        throw new Error(data.message)
      } else {
        PubSub.publish('SEARCH_INFO', {
          isLoading: false,
          err: '',
          usersList: data.items
        })
      }
    } catch (error) {
      PubSub.publish('SEARCH_INFO', {
        isLoading: false,
        err: error.message
      })
    }
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
