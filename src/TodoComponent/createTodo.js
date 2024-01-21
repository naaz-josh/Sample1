import { useState } from "react";



const CreateTodo = () => {
    
    let [title,setTitle]= useState('')
    let[Due_Date,setDue_Date]=useState('')
    
    const HandleSubmit=(e)=>{
       
         e.preventDefault()
         const todo={title,Due_Date}
         fetch('http://localhost:8000/data',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(todo)
         }).then(()=>{
            console.log("data is added")
            console.log(todo)
         })

    }
     return   <div className="createTodo">
            <h2>Create Your own Todo List!</h2>
            <form class="create" id="form_id" name="onSubmit" onSubmit={HandleSubmit}>
            <label >Todo_Title : 
            <input type="text" 
            onChange={(e)=>{setTitle(e.target.value)}}/>
            </label>
            <label >Due_Date: 
            <input type="text"
             onChange={(e)=>{setDue_Date(e.target.value)}}/>

            </label>
            <button type="submit">Submit</button>
            
            </form>
           
            <p>{title}</p>
            <p>{Due_Date}</p>
        </div>
    
    
       
        
     ;
}


 
export default CreateTodo;