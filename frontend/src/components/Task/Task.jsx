import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { fetchTlists } from '../../redux/slices/tlists';
import { patchTask } from "../../redux/slices/tasks"

import ModalEditTask from '../ModalEditTask/ModalEditTask';

import './Task.css'

function Task(){
    var tasks = useSelector((state) => state.tasks.tasks);
    var tlistId = useSelector((state) => state.tasks.tlistId);
    const dispatch = useDispatch(); 

    return(
        <>
            {tasks?.map(c => (
                <li className={c.completed ? "t1p" : "t1"} onClick={async event => 
                        {
                            const data = await dispatch(patchTask({
                                tlistId: tlistId,
                                taskId: c._id, 
                                taskName: c.name, // переименование сюда
                                taskCompleted: !c.completed,
                            })); 
                        }} key={c._id}> 
                    {c.name} 
                    <ModalEditTask> {c._id} </ModalEditTask>
                </li>))}
        </>
    )
}

export default Task;