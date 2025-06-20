import { useState, useEffect } from 'react'
import WReg from './components/WReg'
import TMenu from './components/TMenu'
import axios from 'axios'
import "./css/index.css"

function App() {
  const [tLists, settLists] = useState([{_id: '6852b675273045cfd2a992ea', name: 'first list', creator: '6851fa22ad3cc7bf69c614f8', createdAt: '2025-06-18T12:52:05.045Z', updatedAt: '2025-06-18T12:52:05.045Z'}])

  useEffect(() => {
    axios.get("http://127.0.0.1:4444/testlists").then(res => {
      settLists(res.data)
    })
  }, [])

  return (
    <>
      <WReg/>
    </>
    
  )
}

export default App


