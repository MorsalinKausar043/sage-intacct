
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
import MiddleBanner from './components/middleBanner/MiddleBanner';
import CarouselBanner from './components/CarouselBanner/CarouselBanner';

const App = () => (
  <>
    <Menubar />
    <Home />
    <HeaderBanner />
    <AccordingPart />
    <MiddleBanner />
    <CarouselBanner/>
    <Middlebanner/>
    <Sliders/>
    <Footer />
  </>
)

export default App

