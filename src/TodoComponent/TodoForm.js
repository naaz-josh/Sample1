import {useReducer} from "react";


const TodoFormReducer=(state,action)=>{
        
    switch(action.type){
        case "SET_VALUE":
            return { ...state, value: action.payload };
          case "RESET_FORM":
            return { ...state, value: "" };
          default:
            return state;
    }
   }

const TodoForm = ({dispatch}) => {

const[state,formdispatch]=useReducer(TodoFormReducer,{value:""})
   
const handleSubmit=(e)=>{
        e.preventDefault( );
        if(state.value){
        dispatch({ type: "ADD_TODO", payload: state.value })
        formdispatch({type:"RESET_FORM"})
    
        }
     
       
    }
    return ( 
        <form  onSubmit={handleSubmit} className="TodoForm">
            <input type="text" className="todo-input" value={state.value} placeholder="What is the task?" onChange={
                (e)=>{
                   formdispatch({type:"SET_VALUE",payload: e.target.value })
                }
            }/>
            <button type="submit" className="todo-btn" >Add Task</button>

        </form >
     );
}
 
export default TodoForm;