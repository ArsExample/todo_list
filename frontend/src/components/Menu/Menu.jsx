import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { fetchTlists } from '../../redux/slices/tlists';
import { updateTasks } from "../../redux/slices/tasks"
import "./Menu.css"

const Menu = () => {
    const dispatch = useDispatch();
    const tlistsData = useSelector((state) => state.tlists.items);

    useEffect(() => {
        dispatch(fetchTlists());
    }, [])

    
    return (
        <header className="menu">
            <span className="menu__name">TODO lists</span>
            <nav className="menu__nav">
                <ul className="menu__nav-list">
                    {tlistsData?.map(c => (<li className='menu__nav-item' onClick={event => {
                        console.log(c.name);
                        dispatch(updateTasks(c.tasks));
                    }} key={c._id}>{c.name}</li>))}
                </ul>
            </nav>
        </header>   
    )
    
}

export default Menu;