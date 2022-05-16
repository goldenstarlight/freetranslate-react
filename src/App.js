import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Update from './pages/Update';
import Media from './pages/Media';
import About from './pages/About';
import Skill from './pages/Skill';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/updates" element={<Update/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skill/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
