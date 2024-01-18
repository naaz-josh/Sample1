import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,HandleDelete}) => {

    return ( 
        <div className="todo">
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faTrash} onClick={()=>{
                HandleDelete(task.id)
            }}/>
           
            </div>
        </div>
     );
}
 
export default Todo;