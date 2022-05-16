
import './App.css';
import Intro from './components/Intro';
import Header from './components/header';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Intro />
      <Header/>
      <div className='services'>
      <Services/> 
      </div>
                
    </div>
  );
}

export default App;
