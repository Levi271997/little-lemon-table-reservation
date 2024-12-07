
import './App.scss';
import GlobalHeader from './sections/header';
import HomeBanner from  './sections/banner';
import Dishes from './sections/dishes';
import Testimonial from './sections/testimonial';
import Footer from './sections/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <GlobalHeader/>
   <HomeBanner/>
         <Dishes/>
       <Testimonial/>
      <Footer/>
    </div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

