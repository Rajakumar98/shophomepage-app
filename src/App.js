// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import Cards from './component/Cards/Cards'

function App() {
  return (
    <div className='container-fluid'>

    <Navbar />
    <Header />
    <Cards />
    
    </div>   
  );
}

export default App;
