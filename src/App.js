import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import TodoWrapper from './TodoComponent/TodoWrapper';
//import TodoDetails from './TodoComponent/TodoDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
        <Home></Home>
          </Route>
          <Route path="/add-todo">
            <TodoWrapper></TodoWrapper>
          </Route>  
        </Switch>
      </Router>
   
      {/* <TodoWrapper/> */}
    </div>
  );
}

export default App;
