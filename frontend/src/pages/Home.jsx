import {Link} from "react-router-dom"
import Header from "../components/Header/Header.jsx";
import fon from '../../../assets/Akashi.gif'

function Home(){
    return(
        <>
            <Header name="Home"></Header>
            <img src={fon} alt="loading..." className="fon_akashi"/>
            <div className="vremenno">
                <div>
                    <Link to="/login">Логин</Link>
                </div>
                <div>
                    <Link to="/registration">Регистрация</Link>
                </div>
            </div>
        </>
    )
}

export default Home;