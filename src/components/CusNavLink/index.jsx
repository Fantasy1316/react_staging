import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CusNavLink extends Component {
  render() {
    return (
      <NavLink
        className="list-group-item"
        activeClassName="active"
        {...this.props}
      />
    )
  }
}
