export type FormValues = {
    [k: string]: string
}

export type SignUpParams = {
    "username": string,
    "name": string,
    "email": string,
    "password": string
}

export type LoginParams = {
    "username": string,
    "password": string
}

export type UserType = {
    name: string
    email: string
}

export type QueryType = {
    id: string
    name: string
    description: string
    query: string
    group: string
}