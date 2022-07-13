import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'

import './App.scss';

function App() {
  
  return (

    <main>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        <Footer />
      </div>
    </main>
  );
};

export default App;