import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Layout />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
