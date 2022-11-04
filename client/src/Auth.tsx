import { Modal, Tabs } from 'antd'
import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Auth = () => {
    return (
        <Modal title="Wellcome" open={true} footer={null}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Login" key="1">
                    <Login/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="SignUp" key="2">
                    <SignUp/>
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    )
}

export default Auth