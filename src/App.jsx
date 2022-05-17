
import './App.css';
import Intro from './components/Intro';
import Header from './components/header';
import Services from './components/Services';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Intro />
      <Carousel/>
      <div className='services'>
      <Services/> 
      </div>
                
    </div>
  );
}

export default App;
