import React from 'react';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import './App.css';
import PropertyLists from './Components/Properties/PropertyLists';
import Option from './Components/Option/Option';
import Form from './Components/Form/Form';
import Testimony from './Components/Testimony/Testimony';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Banner />
     <About />
     <PropertyLists />
     <Option />
     <Form />
     <Testimony />
     <Footer />
    </div>
  );
}

export default App;
