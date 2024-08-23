import React from 'react'
import './App.css'
import Navigation from './Componerts/Navigation/Navigation';
import Header from './Componerts/Header/Header';
import HeaderContent from './Componerts/HeaderContent/HeaderContent';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="content">
        <HeaderContent />
      </div>
    </div>
  );
}

export default App
