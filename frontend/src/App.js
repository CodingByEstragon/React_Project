import './App.css';
// import {React, useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Project from "./components/Project";
import Shop from "./components/Shop"
import Login from "./components/Login";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar/Navbar";


function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [isDarkMode]);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/calendarView" element={<Project/>} exact></Route>
          <Route path="/shop" element={<Shop/>} exact></Route>
          <Route path="/login" element={<Login/>} exact></Route>
          <Route path="/cart" element={<Cart/>} exact ></Route>
        </Routes>
      </Router>
      
      {/* <div className={isDarkMode ? 'dark-mode' : ''}>
        <label className="ui-switch">
          <input type="checkbox" onClick={toggleDarkMode}></input>
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>
      </div> */}
    </>
  );
}

export default App;
