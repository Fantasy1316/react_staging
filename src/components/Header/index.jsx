import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  forword = () => {
    this.props.history.goForward()
  }

  back = () => {
    this.props.history.goBack()
  }

  go = () => {
    this.props.history.go(2)
  }

  render() {
    return (
      <div className="row pt-5 pb-3">
        <div className="jumbotron">
          <h1 className="display-4">React Router Demo</h1>
          <p className="lead">
            This is a simple react router dome, just to use study some API about
            react-router-dom.
          </p>
        </div>
        <div className="flex">
          <button
            type="button"
            class="btn btn-primary mr-2"
            onClick={this.forword}
          >
            Forword
          </button>
          <button
            type="button"
            class="btn btn-secondary mx-2"
            onClick={this.back}
          >
            Back
          </button>
          <button type="button" class="btn btn-success mr-2" onClick={this.go}>
            Go
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
