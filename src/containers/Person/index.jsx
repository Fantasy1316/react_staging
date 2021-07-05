import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, List, Divider } from 'antd'
import { UserOutlined, HeartOutlined } from '@ant-design/icons'
import { createPersonAction } from '../../redux/actions/person'

class Person extends Component {
  onFinish = values => {
    const id = new Date().getTime()
    const user = {
      id,
      ...values
    }

    this.props.addPerson(user)
  }

  render() {
    return (
      <div>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="age"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<HeartOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="age"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            )}
          </Form.Item>
        </Form>
        <Divider></Divider>
        <List
          header={<div>用户列表, 求和数: {this.props.count}</div>}
          bordered
          dataSource={this.props.persons}
          renderItem={item => (
            <List.Item>
              {item.username} -- {item.age}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default connect(
  state => ({ persons: state.persons, count: state.count }),
  {
    addPerson: createPersonAction
  }
)(Person)
