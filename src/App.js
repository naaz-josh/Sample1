import './App.css';
// import TodoWrapper from './TodoComponent/TodoWrapper';
import CreateTodo from './TodoComponent/createTodo';
// import SearchBar from './TodoComponent/searchBar';
// import TodoData from './data/data.json'



function App() {
  return (
    <div className="App">
      {/* <SearchBar placeholder="Enter a Todo..." data={TodoData}></SearchBar> */}
      {/* <TodoWrapper/> */}
      
      <CreateTodo></CreateTodo>
    </div>
  );
}

export default App;
