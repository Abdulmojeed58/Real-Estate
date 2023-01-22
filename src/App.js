import React from 'react';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import './App.css';
import PropertyLists from './Components/Properties/PropertyLists';

function App() {
  return (
    <div className="App">
     <Banner />
     <About />
     <PropertyLists />
    </div>
  );
}

export default App;
