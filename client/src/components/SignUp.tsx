import { Button, Form, Input, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { login, setAuthHeader, signup } from '../api'
import { FormValues } from '../types'
import { AxiosResponse } from 'axios'
import store from '../store'

type LoginResponse = {
    user: any,
    token: string
}

const SignUp = () => {
    const { setUser } = store
    async function handleFinish({username, password, name, email}: FormValues) {
        try {
            const { data }: AxiosResponse<any> = await signup({username, name, email, password})
            const { user, token } = data
            localStorage.setItem('token', token)
            setAuthHeader(token)
            setUser(user)
        } catch(e) {
            alert('SignUp error!')
            console.log("Custom error handler", e)
        }
    }
    return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ 
                    username: 'test', 
                    password: 'test',
                    email: 'test@test.ru',
                    name: 'test'
                }}
                onFinish={handleFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
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
                        SignUp
                    </Button>
                </Form.Item>
            </Form>
    )
}

export default SignUp