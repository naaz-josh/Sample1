import { useState } from "react";



const CreateTodo = () => {
    
    let [title,setTitle]= useState('')
    let[Due_Date,setDue_Date]=useState('')
    
    const HandleSubmit=(e)=>{
       
         e.preventDefault()
         const todo={title,Due_Date}
         fetch('http://localhost:8000/todo',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(todo)
         }).then(()=>{
            console.log("data is added")
         })

    }
     return   <div className="createTodo">
            <form id="form_id" name="onSubmit" onSubmit={HandleSubmit}>
            <label >Todo_Title : 
            <input type="text" 
            onChange={(e)=>{setTitle(e.target.value)}}/>
            </label>
            <label >Due_Date: 
            <input type="text"
             onChange={(e)=>{setDue_Date(e.target.value)}}/>
            </label>
            </form>
            <button type="submit">Submit</button>
            <p>{title}</p>
            <p>{Due_Date}</p>
        </div>
    
    
       
        
     ;
}


 
export default CreateTodo;