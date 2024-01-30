import { useCallback, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaAsc } from "@fortawesome/free-solid-svg-icons";



const TodoWrapper = () => {


    const [todoList, setTodoList] = useState([
        {
            id: 1,
            "task": "naaz",
            completed: false
        },
        {
            id: 2,
            "task": "neha",
            completed: false
        },
        {
            id: 3,
            "task": "pneha",
            completed: false
        },
        {
            id: 4,
            "task": "pnaaz",
            completed: false
        }
    ])
    const [filterData, setfilterData] = useState([])

    const[searchinput,setsearch]=useState("")
    const[searchResults,setsearchResults]=useState([])
    const [statusFilter, setStatusFilter] = useState("all");





    const addTodo = useCallback((todo) => {
        setTodoList([...todoList, { id: uuidv4(), task: todo, completed: false }])
    }, [todoList])

    const handleSort = useCallback(() => {
   
        const sortedData =  filterData.length && [...filterData].sort((a, b) => 
           (a.task < b.task ? -1 : a.task > b.task ? 1 : 0) 
        )
        // setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setfilterData(sortedData)

    }, [filterData])
    console.log(filterData)
  
    //console.log('sortorder>>>>>>',sortData)

    const HandleDelete = useCallback((id) => {
        let updatedTasks = [...todoList].filter(todo => todo.id !== id)
        setTodoList(updatedTasks)
        let filteredTasks=[...filterData].filter(todo => todo.id !== id)
        setfilterData(filteredTasks)

    }, [todoList,filterData])
    const handleSearch = useCallback((e) => {
        const searchinput = e.target.value
        setsearch(searchinput)
        const search = todoList.filter((el) => {
            return el.task.toLowerCase().includes(searchinput.toLowerCase())
        })
        console.log("filterdata",searchResults)
        setfilterData(search)
        setsearchResults(search)
        
    }, [todoList])

    const toggleComplete = useCallback((id) => {
        let toggledData = todoList.map((todo) =>
        {
            if(todo.id === id ){
                todo.completed=!todo.completed;
            }

            return todo;
    })
        console.log("toggledData", toggledData);
        setTodoList(toggledData);
    }, [todoList])

    const handleStatusChange = useCallback((e) => {
        const selectedStatus = e.target.value;
        setStatusFilter(selectedStatus);

        console.log('=> ', searchResults);
   
        if (selectedStatus === "completed") {
            const completedTasks = searchResults.filter((todo) => todo.completed === true);
            console.log(completedTasks)
            setfilterData(completedTasks);
    
        }
        else if (selectedStatus === "pending") {
            
            const pendingTasks = searchResults.filter((todo) => todo.completed === false);
            setfilterData(pendingTasks);
            console.log(pendingTasks)
        }
        else {
            setfilterData(todoList);
        }
    }, [todoList, searchResults]);

    console.log('todo list data>>>>>>>>', todoList, filterData)



    return (

        <div className="todowrapper">
            <h1>Get Things Done !</h1>
            <div className="Filter-Component">
                <div className="searchInput">


                    <input type="text" onChange={handleSearch} />
                    <div className="searchIcon">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>

                </div>

                <div className="sort">
                    <label >Task</label>
                    <div className="sortIcon" onClick={handleSort}>
                        <FontAwesomeIcon icon={faSortAlphaAsc}></FontAwesomeIcon>
                    </div>
                </div>


                <div className="status">
                    <label for="status">Status:</label>
                    <select id="status" name="status" onChange={handleStatusChange} value={statusFilter}>
                        <option value="">All</option>
                        <option value="pending">Pending</option>
                        <option value="completed" >Completed </option>

                    </select>
                </div>
            </div>

            <TodoForm addTodo={addTodo}></TodoForm>

            <div>
                {
                    searchinput.length && filterData.length ? filterData.map((todo, index) =>
                        <Todo task={todo} key={index} HandleDelete={HandleDelete} toggle={toggleComplete} />
                    ) : todoList.map((todo, index) =>
                        <Todo task={todo} key={index} HandleDelete={HandleDelete} toggle={toggleComplete} />
                    )}
            </div>
          

        </div>
    );

}
export default TodoWrapper;