import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './explore.css'
import './App.css'
import './history.css'
import Explore from './explore';
import Home from './home';
import Culture from './history';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/culture' element={<Culture />} />
      </Routes>
    </Router>
    </>
  )
}

export default App