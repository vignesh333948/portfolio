import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Session from './companants/Session';
import Home from './companants/Home';
import About from './companants/About';
import Skills from './companants/Skills';
import Project from './companants/Project';
import Contact from './companants/Contact';
import Footer from './companants/Footer';
function App() {
  return (
  <div className='row'>
  <div className='col-12 col-sm-3'>
    <Session /> 
    </div>
    <div className='col-12 col-sm-9 ps-5'>
    <Home />
    <About /> 
    <Skills />
     <Project />
     <Contact /> 
     <Footer />
     </div>
     </div>
  );
}

export default App;
