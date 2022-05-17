
import './App.css';
import Intro from './components/Intro';
import Header from './components/header';
import Services from './components/Services';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <div className="App">
      <div className="Home">
        <Intro />
      </div>
      
      <Carousel />
      <div className="About">
        <About />
      </div>
      <div className='services'>
        <Services />
      </div>
      <div className="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
