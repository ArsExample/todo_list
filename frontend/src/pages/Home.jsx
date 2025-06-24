import {Link} from "react-router-dom"

function Home(){
    return(
        <>
            <h1>Home page</h1>
            <div>
                <Link to="/login">Логин</Link>
            </div>
            <div>
                <Link to="/registration">Регистрация</Link>
            </div>
            <div>
                <Link to="/">Домой</Link>
            </div>
        </>
    )
}

export default Home;