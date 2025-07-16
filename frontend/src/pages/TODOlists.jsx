import Menu from '../components/Menu/Menu.jsx'
import Menu2 from '../components/Menu2/Menu2.jsx'
import Header from '../components/Header/Header.jsx'
import '../css/index.css'

import { useDispatch, useSelector } from "react-redux"

function TODOlists(){
    const tasksData = useSelector((state) => state.tasks);

    return(
        <>
            <Header name={tasksData.tlistname}></Header>
            <Menu name={tasksData.tlistname}/>
            <Menu2 />
        </>
    )
}

export default TODOlists;