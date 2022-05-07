import React from 'react';
import './App.css';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';
import Counter from './components/Counter/Counter';
import Departments from './components/Departments/Departments';
import Doctors from './components/Doctors/Doctors';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import KeyDetails from './components/KeyDetails/KeyDetails';
import MoreService from './components/MoreService/MoreService';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

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
      <Departments />
      <Testimonial />
      <Doctors />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
