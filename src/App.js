import './App.css';
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Footer from './components/footer'
import PortfolioContainer from './components/portfoliocontainer';
import TopBar from './components/Topbar';

import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Contact from '../src/Pages/Contact'
import Resume from '../src/Pages/Resume'

function App() {
  return (
   <div className= 'app'> 
   <TopBar/>
   <PortfolioContainer/>
   <Footer/>
  </div>
  );
}

export default App;
