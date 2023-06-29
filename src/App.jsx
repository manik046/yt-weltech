import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import SocialLinks from "./components/SocialLinks";
import Solar from "./components/Solar";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
       <Route exact path="/" element={ <Home /> } /> 
       <Route exact path="/home" element={ <Home /> } /> 
       <Route exact path="/about" element={ <About /> } /> 
       <Route exact path="/services" element={ <Services /> }/>
        <Route exact path="/solar" element={ <Solar /> }/>
       <Route exact path="/clients" element={ <Clients /> } /> 
       <Route exact path="/contact" element={ <Contact /> } /> 
       <Route exact path="/*" element={ <Error /> } /> 
      </Routes>

      <SocialLinks />
    </div>
  );
}

export default App;
