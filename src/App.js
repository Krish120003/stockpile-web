import React from 'react'
import Home from './pages/Home'
import Learn from './pages/Learn';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePortfolio from './pages/CreatePortfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/CreatePortfolio" element={<CreatePortfolio />} />
        </Routes>
      </Router>
    </>
  )
}
