import React from 'react'
import { QueryType } from '../types'
import Query from './Query'

type GroupProps = {
    name: string
    queries: QueryType[]
}

const Group = (props: GroupProps) => {
    return (
        <>
            <h1>{props.name}</h1>
            { props.queries.map((q)=><Query key={q.id} {...q}/>)}
        </>
    )
}

export default Group