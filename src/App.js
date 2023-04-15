import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/body/home/Home.js';
import About from './components/body/about/About.js';
import Blog from './components/body/blog/Blog.js';
import Repair from './components/body/repair/Repair.js';
import ContactUs from './components/body/contactus/Contactus.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home page="home" />} />
        <Route path="/about" element={<About page="about"/>} />
        <Route path="/blog" element={<Blog page="blog"/>} />
        <Route path="/repair" element={<Repair page="repair"/>} />
        <Route path="/contact_us" element={<ContactUs page="contactus"/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
