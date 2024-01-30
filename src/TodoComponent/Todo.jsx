// import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, HandleDelete, toggle }) => {

    // const[ischecked,SetisChecked]=useState(false)
    // function ChangeColor(){
    //     SetisChecked(!ischecked)
    // }

    console.log('task>>>', task);
    return (
        <div className={`todo ${task.completed ? 'checked' : ''}`}>

            <input type="checkbox" id={task.id} onClick={()=> {toggle(task.id)}} />
            <p>{task.task}  </p>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={()=>{
                    HandleDelete(task.id)
                 } } />

            </div>
        </div>
    );
}

export default Todo