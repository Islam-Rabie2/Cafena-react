import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <Shop/>
     <Menu/>
     <Gallery/>
     <About/>
     <Footer/>
    </>
  );
}

export default App;