import React , { useEffect,useState , Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link, NavLink} from "react-router-dom";
import{ Home, Book, Chat, Task, Slot,About} from "./pages";
import {Profile,Edit} from './Profile'
import { Navbar } from 'react-bootstrap';



function App(){
  
  return(
    <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Profile' element={<Profile/>}/>   
    <Route path='/book' element={<Book/>} />     
    <Route path='/chat' element={<Chat/>} />
    <Route path='/task' element={<Task/>} />
    <Route path='/slot' element={<Slot/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/edit' element={<Edit/>}/>

    </Routes>
    </Router>
  );
}



export default App;
