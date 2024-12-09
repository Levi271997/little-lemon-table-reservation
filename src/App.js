
import './App.scss';
import GlobalHeader from './sections/header';

import Footer from './sections/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Reservation from './reservation';
import Home from './Home';
import './App.scss';
import './reserve.scss';
import HomeBanner from  './sections/banner';
import Dishes from './sections/dishes';
import Testimonial from './sections/testimonial';




function App() {
  return (
    
    <div className="App">
      <GlobalHeader/>
   
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" element={<Reservation />} />
          </Routes>

  

      <Footer/>
      </div>

  );
}

export default App;

