import { Routes, Route } from "react-router-dom"

import WReg from './pages/WReg'
import WLogin from './pages/WLogin'
import TMenu from './components/TMenu'
import Home from "./pages/Home"

import "./css/index.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/registration" element = {<WReg/>}/>
        <Route path="/login" element = {<WLogin/>}/>
        <Route path="/tmenu" element = {<TMenu/>}/>
        <Route path="*" element = {<Home/>}/>
      </Routes>
    </>
    
  )
}

export default App


