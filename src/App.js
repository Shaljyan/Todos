import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Loading from "./components/Loading";
import TodosList from './components/TodoList';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect (() =>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) =>{
    setTodos(result.data);
  });
  }, []);
  
  return (
    <div>
      {todos ? <TodosList todos={todos}/>: <Loading />}   
    </div>
    );
}

export default App;
