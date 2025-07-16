import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { fetchTlists } from '../../redux/slices/tlists';
import { updateTasks } from "../../redux/slices/tasks"

import "./Menu.css"

const Menu = (props) => {
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
                    {tlistsData?.map(c => (<li className={props.name == c.name ? "menu__nav-item_plus" : 'menu__nav-item'} onClick={event => {
                        dispatch(updateTasks({tasks: c.tasks, tasklistId: c._id, tasklistname: c.name}));
                    }} key={c._id}>{c.name}</li>))}
                </ul>
            </nav>
        </header>   
    )
    
}

export default Menu;