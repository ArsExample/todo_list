import Menu from '../components/Menu/Menu.jsx'
import Menu2 from '../components/Menu2/Menu2.jsx';
import {Link} from "react-router-dom"

function TODOlists(){
    return(
        <>
            {/* <Header>
                <Link to="/">Домой</Link>
            </Header> */}
            <Menu />
            <Menu2 />
        </>
    )
}

export default TODOlists;