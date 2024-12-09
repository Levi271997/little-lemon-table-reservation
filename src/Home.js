
import './App.scss';

import HomeBanner from  './sections/banner';
import Dishes from './sections/dishes';
import Testimonial from './sections/testimonial';

const Home=()=>{
    return(
         <>
   <HomeBanner/>
   <Dishes/>
 <Testimonial/>
 </>
    )
}
export default Home;