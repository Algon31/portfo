// import logo from './logo.svg';
import './css/Styles.css'
// import $ from 'jquery';
import Navbar from './components/Navbar.js';
import Quote from './components/Quote.js';
import About from './components/About.js';
import Aboutme from './components/Aboutme.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Background from './components/background.js';


function App() {
  return (
    <>
      {/* <h1>hello world</h1> */}
      <Navbar/>
      <Background/>
      <Quote/>
      <About/>
      <Aboutme/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
