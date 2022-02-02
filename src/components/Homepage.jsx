import React from 'react';
import Header from '../screens/header';
import Sidebar from '../screens/Sidebar';
import Home from '../screens/home';
import Rightbar from '../screens/rightbar';

const Homepage=()=>{
    return( <>
        <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <Home />
      </div>
      <Rightbar />
    </div>
    </>
)}

export default Homepage;