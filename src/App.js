import React from 'react';
import './App.css';
import Header from "./components/Header";
import Intro from './components/Intro';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Subscribe from './components/Subscribe';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from 'react-scroll';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro
        title='12th North American Leadership Forum'
        slogan='Bold Vision, Strategic Action'
        date='October 28, 2020'
      />
      <About />
      <main id="main">
        <Schedule />
        <Speakers />
      </main>
      <Link to='intro' class='back-to-top' smooth={true} duration={1000}>
        <i class='fa fa-angle-up'></i>
      </Link>
    </div>
  );
}

export default App;
