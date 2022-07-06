import React from 'react';
import './App.css';
import Navbar from './Components';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Subjects from './Components/subjects';
import Contact from './Components/contact';

function App() {
return (
  <Router>
  <Navbar />
  <Routes>
    <Route exact path='/home'   element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/subjects' element={<Subjects/>} />
 
  </Routes>
  </Router>
);
}

export default App;
