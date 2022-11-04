import { Button, DatePicker } from 'antd'
import React, { useEffect } from 'react'
import { getQueries, setAuthHeader } from './api'
import store from './store'
import { AxiosResponse } from 'axios'
import { QueryType } from './types'
import Query from './components/Group'
import { observer } from 'mobx-react-lite'
import Group from './components/Group'

const Main = () => {
    const { setUser, queries, setQueries, user } = store
    useEffect(()=>{
        if(!queries) fetchQueries()
    }, [])
    async function fetchQueries() {
        try {
            const { data }: AxiosResponse<QueryType[]> = await getQueries()
            console.log("Queries: ", data)
            setQueries(data)
        } catch(e) {
            console.log(e)
        }
        
    }
    function handleLogout() {
        localStorage.removeItem('token')
        setUser(null)
    }

    const groups: {[k:string]: QueryType[]} = {}
    queries?.map((q)=>{
        if(Array.isArray(groups[q.group])) return groups[q.group].push(q)
        groups[q.group] = [q]
    })
    return (
        <>
            <div className='p-1'>
                <h3>{user?.email}</h3>
                <Button onClick={handleLogout}>Logout</Button>
                <hr/>
            </div>
            <div className='p-1'>
                {Object.keys(groups).map(key=>(<Group key={key} name={key} queries={groups[key]}/>))}
            </div>
        </>

    )
}

export default observer(Main)