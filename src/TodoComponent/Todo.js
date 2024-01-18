import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,HandleDelete}) => {
   
    const[ischecked,SetisChecked]=useState(false)
    function ChangeColor(){
        SetisChecked(!ischecked)
    }
    
    return ( 
        <form className={`todo ${ischecked ? 'checked' : ''}`}>
            <input type="checkbox" id={task.id} onClick={ChangeColor}/>
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faTrash} onClick={()=>{
                HandleDelete(task.id)
            }}/>
           
            </div>
        </form>
     );
}
 
export default Todo;