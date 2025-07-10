import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import './Task.css'

function Task(){
    var tasks = useSelector((state) => state.tasks.tasks);

    

    return(
        <>
            {tasks?.map(c => (<li className={c.completed ? "t1p" : "t1"} onClick={event => 
            {console.log(c.name, c.completed) ,(e) => { c.completed = !c.completed }}} key={c._id}> 
                {c.name}
                <button className='t2'> </button>
            </li>))}
        </>
    )
}

export default Task;