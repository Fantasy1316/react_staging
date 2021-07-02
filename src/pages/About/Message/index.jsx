import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageList: [
      { id: '01', title: '我是周杰伦' },
      { id: '02', title: '我是林俊杰' },
      { id: '03', title: '我是蔡依林' }
    ]
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.messageList.map(item => {
            return (
              // *****  params 传参  *******
              // <Link
              //   className="list-group-item"
              //   key={item.id}
              //   to={`/about/message/detail/${item.id}/${item.title}`}
              // >
              //   {item.title}
              // </Link>

              // *****  search 传参  *****
              // <Link
              //   className="list-group-item"
              //   key={item.id}
              //   to={`/about/message/detail?id=${item.id}&title=${item.title}`}
              // >
              //   {item.title}
              // </Link>

              // *****  state 传参  *****
              <Link
                className="list-group-item"
                key={item.id}
                replace
                to={{
                  pathname: '/about/message/detail',
                  state: { id: item.id, title: item.title }
                }}
              >
                {item.title}
              </Link>
            )
          })}
        </ul>
        {/*  params 传参 */}
        {/* <Route path="/about/message/detail/:id/:title" component={Detail} /> */}

        {/*  search 传参 */}
        {/* <Route path="/about/message/detail" component={Detail} /> */}

        {/*  state 传参, 但是在 hashRouter中会出现刷新参数丢失的问题 */}
        <Route path="/about/message/detail" component={Detail} />
      </div>
    )
  }
}
