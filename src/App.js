import './App.css';
import Contact from './components/contactform/Contact';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Projects from './components/projects/Projects'
import { useEffect } from 'react';


import Layout from "./components/Layout.js";
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';

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
          <Route path="/projects" element={<Projects/>}></Route>
          

          
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
