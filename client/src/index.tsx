import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './App'
import 'antd/dist/antd.css'
import './styles/main.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App/>)

// ReactDOM.render(<App />, document.getElementById("root"))