import React, { useReducer} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const reducer=(state,action)=>{
      switch(action.type){
        case "Checked": return {...state,checked:state.checked=true}
        case "UnChecked": return {...state,checked:state.checked=false}
     
        default: return state
      }
}
const Todo = ({task,HandleDelete}) => {
    
    const [state,dispatch]= useReducer(reducer,{checked:false})
    // const[ischecked,SetisChecked]=useState(false)
    function ChangeColor(){
        dispatch({type:"Checked"})
    }
    
    return ( 
        <form className={`todo ${state.checked===true ? 'checked' : ''}`}>
            <input type="checkbox" id={task.id} onClick={ChangeColor} />
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