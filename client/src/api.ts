import axios from 'axios'
import { LoginParams, SignUpParams } from './types'

export function signup(params: SignUpParams){
    return axios.post('http://localhost:3001/auth/signup', params)
}

export function login(params: LoginParams) {
    return axios.post('http://localhost:3001/auth/login', params)
}

export function getUsers() {
    return axios.get('http://localhost:3001/users')
}

export function me() {
    return axios.get('http://localhost:3001/auth/me')
}

export function setAuthHeader(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function getQueries() {
    return axios.get('http://localhost:3001/queries')
}

export function getOneQuery(id: string) {
    return axios.get(`http://localhost:3001/queries/${id}`)
}