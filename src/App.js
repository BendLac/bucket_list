import React from 'react';
import './App.css';
//Navigate, route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Other Components
import Home from './components/Home';
import Form from './components/Form';
import ItemList from './components/ItemList';


function App() {

  return (
    <div className="App">
      <header>
        <h1>My Bucketlist</h1>
      </header>

      <Router>        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
