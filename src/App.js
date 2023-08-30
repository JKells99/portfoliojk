import './App.css';
import Contact from './components/contactform/Contact';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { useEffect } from 'react';


import Layout from "./components/Layout.js";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = 'Jordan Kelloway';
    
  }, []);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          

          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
