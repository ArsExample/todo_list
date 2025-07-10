import {Link} from "react-router-dom"
import React from 'react';
import Profile_Icon from '../Profile_Icon/Profile_Icon.jsx'
import './Header.css'

const Header = (props) => {
     return (  
        <>
            <header className="header">
                <Link to="/" className='linkH'>
                    <h1>
                        Home
                    </h1>
                </Link>
                <h2 className="page_name">{props.name}</h2>
                {/* <Link to="/" className='linkLK'>
                    <h1>
                        ЛК
                    </h1>
                </Link> */}
                <Profile_Icon></Profile_Icon>
            </header>
        </>
    )
    
}

export default Header;