import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import {Provider} from "react-redux"

import store from "./redux/store.js"

import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* подключили роутинг и redux storage*/}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
