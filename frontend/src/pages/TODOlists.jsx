import Menu from '../components/Menu/Menu.jsx'
import Menu2 from '../components/Menu2/Menu2.jsx'
import Header from '../components/Header/Header.jsx'
import '../css/index.css'

function TODOlists(){
    return(
        <>
            <Header name="TODOLists"></Header>
            <Menu />
            <Menu2 />
        </>
    )
}

export default TODOlists;