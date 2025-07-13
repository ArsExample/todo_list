import {Link} from "react-router-dom"
import Header from "../components/Header/Header.jsx";
import fon from '../../../assets/Akashi.gif'
import ModalRegLog from "../components/ModalRegLog/ModalRegLog.jsx";

function Home(){
    return(
        <>
            <Header name="Home"></Header>
            <img src={fon} alt="loading..." className="fon_akashi"/>
        </>
    )
}

export default Home;