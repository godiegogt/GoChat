import React from 'react';

import './App.css';
//import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/elements/Navbar';
import { Chat } from './components/views/Chat';


function App() {

  
  return (

    <div className='container'>
      <Navbar/>
      <Chat/>
    
    </div>
    
  );
}

export default App;
    

