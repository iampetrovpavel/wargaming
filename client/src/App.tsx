import React, { ChangeEvent, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react'
import { FC } from 'react'
import { DatePicker } from 'antd'
import { observer } from 'mobx-react-lite'
import Store from './store'
import Login from './components/Login'
import { me, setAuthHeader } from './api'
import { UserType } from './types'
import { AxiosResponse } from 'axios'
import Main from './Main'
import Auth from './Auth'

type AppProps = {
}

const App: FC<AppProps> = () => {
    const { user, setUser } = Store
    useEffect(()=>{
        if(!user) { 
            const token = localStorage.getItem('token')
            if(!token) return
            setAuthHeader(token)
            getMe()
            return 
        }
    }, [ user ])
    async function getMe(){
        try {
            const { data }: AxiosResponse<UserType> = await me()
            const { name, email } = data
            setUser({ name, email })
        } catch(e){
            console.log("Custom error handler: ", e)
        }
    }
    if (!user) return <Auth/>
    return <Main/>
}

export default observer(App)