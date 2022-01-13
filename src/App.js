
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './components/Home/Home';
import Menubar from './pages/Navbar/Menubar';
import Footer from "./components/footer/Footer";
import Sliders from './components/Slider/Slider';
import Middlebanner from './components/MiddleBenner/Middlebanner';
import HeaderBanner from './components/HeaderMiniBanner/HeaderBanner';
import AccordingPart from './components/AccordingPart/AccordingPart';

const App = () => (
  <>
    <Menubar />
    <Home />
    <HeaderBanner />
    <AccordingPart/>
    <Middlebanner/>
    <Sliders/>
    <Footer />
  </>
)

export default App

