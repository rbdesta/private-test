import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Header from './Header';
import About from './About'
import Project from './Project';

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <BrowserRouter>
      <Routes>
        {/* <Route path='/private-test' /> */}
        <Route path='/private-test' element={<Header />} />
        <Route index path='/private-test' element={<Home />} />
        <Route path='/private-test/about' element={<About/>} />
        <Route path='/private-test/projects' element={<Project/>} />
      </Routes>
     </BrowserRouter>

    </main>
  );
}

export default App;
