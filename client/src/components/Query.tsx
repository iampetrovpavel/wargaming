import React from 'react'
import { QueryType } from '../types'

const Query = (props: QueryType) => {
    const {id,name,description,query,group} = props
    return (
        <>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <p>{query}</p>
        </>
    )
}

export default Query