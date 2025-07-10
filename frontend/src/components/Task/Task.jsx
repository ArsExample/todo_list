import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import './Task.css'

function Task(){
    var tasks = useSelector((state) => state.tasks.tasks);

    return(
        <>
            {tasks?.map(c => (<li className='t1' onClick={event => {console.log("1") ,(e) => {/* тут пенис должен быть */}}} key={c._id}>
                {c.name}
                <button className='t2'> </button>
            </li>))}
        </>
    )
}

export default Task;