import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js"
import WReg from './pages/WReg'
import WLogin from './pages/WLogin'
import TODOlists from './pages/TODOlists.jsx'
import Home from "./pages/Home"

import "./css/index.css"

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => { // при первом рендере получаем информацию об авторизованном пользователе
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Routes>  
        <Route path="/registration" element = {<WReg/>}/> {/* подключили роутинг, path - ссылка на самом сайте, element - твой .jsx файл*/}
        <Route path="/login" element = {<WLogin/>}/>
        <Route path="/todolists" element = {<TODOlists/>}/>
        <Route path="*" element = {<Home/>}/>
      </Routes>
    </>
    
  )
}

export default App


