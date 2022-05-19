
import './App.css';
import Intro from './components/Intro';
import Header from './components/header';
import Services from './components/Services';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Gallery from './components/Gallery';



function App() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className="App" >
      <div className="Home">
        <Intro />
      </div>
      <Carousel />
      <div className="" data-aos="zoom-in" >
        <About />
      </div>
      <div className='' data-aos="zoom-in" >
        <Services />
      </div>
      <div className='' data-aos="zoom-in" >
        <Gallery />
      </div>
      <div className="" data-aos="zoom-in" >
        <Contact />
      </div>   
      <Footer />
    </div>
  );
}

export default App;
