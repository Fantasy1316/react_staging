import React, { Component } from 'react'
// import qs from 'querystring'

export default class Detail extends Component {
  state = {
    detailList: [
      { id: '01', content: '你好周杰伦' },
      { id: '02', content: '你好林俊杰' },
      { id: '03', content: '你好蔡依林' }
    ]
  }
  render() {
    // 接受 params 参数
    // const { id, title } = this.props.match.params || {}

    // 接受 search 参数
    // const { search } = this.props.location.search
    // const { id, title } = qs.parse(search.slice(1))

    // 接受 state 参数
    const { id, title } = this.props.location.state || {}

    const findResult =
      this.state.detailList.find(item => {
        return item.id === id
      }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
