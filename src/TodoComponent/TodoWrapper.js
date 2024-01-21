import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";




const TodoWrapper = () => {
   

    const [todoList, setTodoList] = useState([])
    // const [sortOrder, setSortOrder] = useState('asc');

    function addTodo(todo) {
        setTodoList([...todoList,{ id: uuidv4(), task: todo, completed: false}]
       )
       console.log(todoList)
       
    }
    // function HandleSort(){
    //   const sortedData=[...todoList].sort((a,b)=>{
    //     return ('asc' ? (a.task < b.task ? -1 : a.task > b.task ? 1 : 0) : 0)
    //   })
    //   setSortOrder(sortedData)
    // }
    function HandleDelete(id){
       let updatedTasks=todoList.filter(todo=>todo.id!==id)
        setTodoList(updatedTasks)
        
    }
    return (
        <div className="todowrapper">
            
            <h1>Get Things Done !</h1>
            <TodoForm addTodo={addTodo}></TodoForm>
             
            {todoList.map((todo,index)=>
            <Todo  task={todo} key={index} HandleDelete={HandleDelete}/>
            
        
            
            )}
        
        </div>
    );

            }
export default TodoWrapper;