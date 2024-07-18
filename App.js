// import { QuickSpin } from './Components/QuickSpin';
// import './Components/Main.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Landing/Layouts/Navbar'
import Home from './components/Landing/Home'
import About from './components/Landing/About/About';
import Services from './components/Landing/Services/Services';
import Contact from './components/Contact/Contact';
import BookNow from './components/BookNow/BookNow';
import Footer from './components/Landing/Layouts/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<BookNow />} />
        </Routes>
<Footer/>
      </HashRouter>
    </>
  );
}

export default App;
