
import './App.scss';
import GlobalHeader from './sections/header';
import HomeBanner from  './sections/banner';
import Dishes from './sections/dishes';
import Testimonial from './sections/testimonial';
import Footer from './sections/footer';

function App() {
  return (
    <div className="App">
        <GlobalHeader/>
   <HomeBanner/>
         <Dishes/>
       <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

