import React from 'react';
import { Reducer, initialState } from './reducers/simpReducer'; 
import './App.css';
import ToDoList from './components/ToDoList'; 

function App() {
  return (
    <div className="App">
      <h2>Your TODO List</h2>
      <ToDoList /> 
    </div>
  );
}

export default App;
