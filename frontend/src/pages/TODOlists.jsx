import Menu from '../components/Menu/Menu.jsx'
import Menu2 from '../components/Menu2/Menu2.jsx';
import {Link} from "react-router-dom"
import Header from '../components/Header/Header.jsx'
import '../css/index.css'

function TODOlists(){
    return(
        <>
            <header className='header'>
                <Link to="/" className='link'>Домой</Link>
            </header>
            <Menu />
            <Menu2 />
        </>
    )
}

export default TODOlists;