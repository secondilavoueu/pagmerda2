/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import React from 'react';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      </BrowserRouter>

 */}
      <Footer/>
    </div>
  );
}

export default App;
