import React from 'react';
// import { Reducer, initialState } from './reducers/simpReducer'; 
import './App.css';
import ToDoForm from './components/ToDoForm'; 



function App() {




  return (
    <div className="App">
      <h2>Your TODO List</h2>
      <ToDoForm /> 
    </div>
  );
}

export default App;
