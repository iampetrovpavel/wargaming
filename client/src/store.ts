import { makeAutoObservable } from 'mobx'
import { QueryType, UserType } from './types'

class Store {
    user: UserType | null | undefined = undefined
    queries: QueryType[] | null = null
    constructor() {
        makeAutoObservable(this)
    }
    setUser = (value: UserType | null) => {
        this.user = value
    }

    setQueries = (value: QueryType[] | null) => {
        this.queries = value
    }
}

export default new Store()