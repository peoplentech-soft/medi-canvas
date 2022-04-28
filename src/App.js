import React from 'react';
import './App.css';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import KeyDetails from './components/KeyDetails/KeyDetails';
import MoreService from './components/MoreService/MoreService';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <KeyDetails />
      <Services />
      <About />
      <Counter />
      <MoreService />
      <Appointment />
    </div>
  );
}

export default App;
