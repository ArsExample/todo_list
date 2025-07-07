import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { fetchTlists } from '../../redux/slices/tlists';
import "./Menu2.css"

const Menu2 = () => {
    const dispatch = useDispatch();
    const tlistsData = useSelector((state) => state.tlists.items);
    var tasks = useSelector((state) => state.tasks.tasks); // во первых я написал var 2й раз в жизни (везде const) во вторых я не ебу строчка реально 
    // у Иисуса Христа блять помощи просит и работает и главное ебать как работает

    useEffect(() => {
        dispatch(fetchTlists());
    }, [])

    
    return (
        <header className="menu2">
            <nav className="b1">
                <ul className="b2">
                     {tasks?.map(c => (<li className='menu__nav-item2' onClick={(e) => {/* тут пенис должен быть */}} key={c._id}>{c.name}</li>))} 
                </ul>
            </nav>
        </header>   
    )
    
}

export default Menu2;

                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>