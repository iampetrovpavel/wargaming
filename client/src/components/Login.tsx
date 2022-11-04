import { Button, Form, Input, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { login, setAuthHeader } from '../api'
import { FormValues } from '../types'
import { AxiosResponse } from 'axios'
import store from '../store'

type LoginResponse = {
    user: any,
    token: string
}

const Login = () => {
    const { setUser } = store
    async function handleFinish({username, password}: FormValues) {
        try {
            const { data }: AxiosResponse<any> = await login({username, password})
            const { user, token } = data
            localStorage.setItem('token', token)
            setAuthHeader(token)
            setUser(user)
        } catch(e) {
            alert('Auth error!')
            console.log("Custom error handler", e)
        }
    }
    return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ username: 'test@test.ru', password: 'test' }}
                onFinish={handleFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
    )
}

export default Login