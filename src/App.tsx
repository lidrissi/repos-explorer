import React from 'react';
import logo from './logo.svg';
import './App.css';
import RepositoriesList from './components/Repository/RepositoriesList';

function App() {
  return (
    <RepositoriesList repos={[
      {
        description: "lorem ipsum",
        name: "lorem ipsum",
        issues: 4,
        stars: 5
      }
    ]}
    />
  );
}

export default App;
