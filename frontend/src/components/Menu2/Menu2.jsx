import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { fetchTlists } from '../../redux/slices/tlists';
import "./Menu2.css"

const Menu2 = () => {
    const dispatch = useDispatch();
    const tlistsData = useSelector((state) => state.tlists.items);

    useEffect(() => {
        dispatch(fetchTlists());
    }, [])

    
    return (
        <header className="menu2">
            <nav className="b1">
                <ul className="b2">
                    {/* {tlistsData?.map(c => (<li className='menu__nav-item2' onClick={event => console.log(c.name)} key={c._id}>{c.name}</li>))} */}
                    <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                </ul>
            </nav>
        </header>   
    )
    
}

export default Menu2;