import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Myskills from './components/Myskills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';




function App() {
  return (
  <div>
    <Navbar/>
    <Introduction/>
    <About/>
    <Myskills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
