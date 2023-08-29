import './App.css';
import Contact from './components/contactform/Contact';
import Cta from './components/cta/Cta';
import Header from './components/header/Header';


import Layout from "./components/Layout.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Cta/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          

          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
