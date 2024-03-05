// In src/App.js
import React from 'react';
import Header from './components/Header';
import ClubSelection from './components/ClubSelection';
import Featured from './components/Featured';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; // Assuming you have an App.css for global styles

function App() {
  return (
      <div className="App">
        <Header />
        <ClubSelection />
          <Featured />
          <About />
          <Footer />
      </div>
  );
}

export default App;
