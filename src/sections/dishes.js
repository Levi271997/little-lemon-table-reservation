import delicacy1 from '../assets/images/delicacy1.webp';
import delicacy2 from '../assets/images/delicacy2.webp';
import delicacy3 from '../assets/images/delicacy3.webp';
import delicacy4 from '../assets/images/delicacy4.webp';
import delicacy5 from '../assets/images/delicacy5.jpg';
import delicacy6 from '../assets/images/delicacy6.webp';

const Dishes=()=>{

    const dishes=[
        {
            dishname:"Delicacy 1",
            dishimage: delicacy1,
            delicacyprice:"$5.00"
        },
        {
            dishname:"Delicacy 2",
            dishimage: delicacy2,
            delicacyprice:"$5.00"
        },
        {
            dishname:"Delicacy 3",
            dishimage: delicacy3,
            delicacyprice:"$5.00"
        },
        {
            dishname:"Delicacy 4",
            dishimage: delicacy4,
            delicacyprice:"$5.00"
        },
        {
            dishname:"Delicacy 5",
            dishimage: delicacy5,
            delicacyprice:"$5.00"
        },
        {
            dishname:"Delicacy 6",
            dishimage: delicacy6,
            delicacyprice:"$5.00"
        }
    ]
    return(
        <section className="our-dishes">
            <div className="container">
                    <div className="dishes-table">
                        <h2 className="section-title">Our Dishes</h2>
                        <div className="menu-grid">

                            {dishes.map((dish, index) => (
                                <div key={index} className="menu-grid_item">
                                    <img src={dish.dishimage} alt='delicious delicacy' className='delicay_image'/>
                                    <p className='delicacy_name'>{dish.dishname}</p>
                                    <p className='delicacy_price'>{dish.delicacyprice}</p>
                                </div>
                            ))}

                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Dishes;