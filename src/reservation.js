import { useState } from "react";


const Reservation=()=>{

    const[formData , setFormData] = useState({
        resDate: '',
        resTime: '',
        guests: '',
        occasion: ''
    });
    

   const handleChange=(e)=>{
         const { name, value } = e.target;
         setFormData(prevState => ({
             ...prevState,
             [name]: value
         }));
    }

    return(
        <section>
            <div className="container">
               <div className="reserveForm">
                <h2>Reserve a table now</h2>
               <form>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" name="resDate" onChange={handleChange}/>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" name="resTime" onChange={handleChange}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" onChange={handleChange} />
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" name="occasion" onChange={handleChange}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <input type="submit" value="Make Your reservation" />
                        </form>


                  
                    </div>
                    </div>
                </section>
    )
}

export default Reservation;