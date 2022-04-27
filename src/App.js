import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import KeyDetails from './components/KeyDetails/KeyDetails';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KeyDetails />
      <Services />
    </div>
  );
}

export default App;
