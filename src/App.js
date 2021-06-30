import React, { Component } from 'react'
import './styles/App.scss'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todoLists: [
      {
        id: 3,
        name: '打代码',
        done: false
      },
      {
        id: 1,
        name: '吃饭',
        done: true
      },
      {
        id: 0,
        name: '睡觉',
        done: true
      }
    ]
  }

  // 添加 todo 事件
  addTodo = todo => {
    const { todoLists } = this.state
    this.setState({ todoLists: [todo, ...todoLists] })
  }

  // 更新 todo 事件
  updateTodo = (id, flag) => {
    const { todoLists } = this.state
    todoLists.forEach(item => {
      if (item.id === id) {
        item.done = flag
      }
    })
    this.setState({ todoLists })
  }

  // 删除 todo 事件
  deleteTodo = id => {
    const { todoLists } = this.state
    const newTodoLists = todoLists.filter(item => {
      return id !== item.id
    })

    this.setState({ todoLists: newTodoLists })
  }

  checkedAllTodo = done => {
    const { todoLists } = this.state
    const newTodoLists = todoLists.map(item => {
      return { ...item, done }
    })

    this.setState({ todoLists: newTodoLists })
  }

  deleteAllFinished = () => {
    const { todoLists } = this.state
    const newTodoLists = todoLists.filter(item => !item.done)

    this.setState({ todoLists: newTodoLists })
  }

  render() {
    return (
      <div className="app-container">
        <div className="todo-list shadow-sm mt-4 border rounded p-3">
          <Header addTodo={this.addTodo} />
          <List
            todoLists={this.state.todoLists}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todoLists={this.state.todoLists}
            checkedAllTodo={this.checkedAllTodo}
            deleteAllFinished={this.deleteAllFinished}
          />
        </div>
      </div>
    )
  }
}
