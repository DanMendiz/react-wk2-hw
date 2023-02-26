import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Clocks from './pages/Clocks';
import Form from './pages/Form';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/clocks" element={<Clocks />} />
          <Route path="/*" element={<Clocks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
