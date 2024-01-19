import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

//import TodoDetails from "./TodoDetails";
import { Link } from 'react-router-dom';


const TodoWrapper = () => {


    const [todoList, setTodoList] = useState([])

    function addTodo(todo) {
        setTodoList([...todoList,{ id: uuidv4(), task: todo, completed: false}])
       
    }
    function HandleDelete(id){
       let updatedTasks=todoList.filter(todo=>todo.id!==id)
        setTodoList(updatedTasks)
    }
    return (
        <div className="todowrapper">
            
            <h1>Get Things Done !</h1><TodoForm addTodo={addTodo}></TodoForm>
            {todoList.map((todo,index)=>

            <Link to={`/todo/ ${todo.id}`}>
            <Todo  task={todo} key={index} HandleDelete={HandleDelete}/></Link>
)}
            
            
        </div>
    );

            }
export default TodoWrapper;