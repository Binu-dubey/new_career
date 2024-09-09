import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import ResultPage from './pages/ResultPage';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test/:testType" element={<Test />} />
        <Route path="/results/:userId" element={<ResultPage />} />

      </Routes>
    </Router>
  );
}

export default App;

