import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { fetchTlists } from '../../redux/slices/tlists';
import "./Menu2.css"
import Task from '../Task/Task.jsx';
import ModalNewTask from '../ModalNewTask/ModalNewTask.jsx'

const Menu2 = () => {
    const dispatch = useDispatch();
    const tlistsData = useSelector((state) => state.tlists.items);
    // во первых я написал var 2й раз в жизни (везде const) во вторых я не ебу строчка реально 
    // у Иисуса Христа блять помощи просит и работает и главное ебать как работает

     const tasksData = useSelector((state) => state.tasks);
     console.log(tasksData)

    useEffect(() => {
        dispatch(fetchTlists());
    }, [])
    
    return (
        <div>

            <header className="b0">
                <nav className="b1">
                    <ul className="b2">
                        {tasksData.tlistId == '' ? '' : <ModalNewTask/>}
                        <Task>  </Task>
                    </ul>
                </nav>
            </header>   
        </div>
    )
    
}

export default Menu2;

                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>
                    // <li className='b3' onClick={event => console.log(c.name)}>barabarabara bereberebere barabarabara bereberebere </li>