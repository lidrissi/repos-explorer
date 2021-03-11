import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
