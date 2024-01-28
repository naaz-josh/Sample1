import { useReducer} from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: uuidv4(), task: action.payload, completed: false }];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};


const TodoWrapper = () => {
    const [todoList, dispatch] = useReducer(todoReducer, []);

    //const [todoList, setTodoList] = useState([])

    // function addTodo(todo) {
    //     setTodoList([...todoList,{ id: uuidv4(), task: todo, completed: false}])

    // }
    const handleDelete = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };
    return (
        <div className="todowrapper">

            <h1>Get Things Done !</h1>
            <TodoForm dispatch={dispatch}></TodoForm>

            {todoList.map((todo, index) =>
            <Todo task={todo} key={index} HandleDelete={handleDelete} />


            )}

        </div>
    );

}
export default TodoWrapper;