import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <div>
        <NavBar/>
        <Home/>
        <About />
        <Services />
        <Clients />
        <Contact />
        <SocialLinks/>

    </div>
    
  )
}

export default App
