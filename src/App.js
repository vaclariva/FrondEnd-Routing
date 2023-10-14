import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContohNavbar from './components/Navbar';
import ContohCard from './components/Card';
import FlexContainer from './FlexContainer';
import FlexboxExamples from './components/FlexboxExamples';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <ContohNavbar />
        <ContohCard />
        <FlexContainer/>
        <FlexboxExamples/>
        <Footer/>
    </div>
  );
}

export default App;
