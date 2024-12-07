import userprofile from '../assets/images/userprofile.webp';
import star from '../assets/images/star.png';



const Testimonial = ()=>{

    const testimonials = [
        {
            image:userprofile,
            name:"Jhon Doe",
            stars:5,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Emily Doe",
            stars:4,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Kim Doe",
            stars:5,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Emma Watson",
            stars:5,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Chris Chu",
            stars:4,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Emily Doe",
            stars:4,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Mark Bob",
            stars:5,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Rick Matt",
            stars:4,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image:userprofile,
            name:"Josh Gohan",
            stars:5,
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]

    return(
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonial-wrapper">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <img src={testimonial.image} className='author-profile'/>
                            <p className='author-name'>{testimonial.name}</p>
                            <div className='star-rating'>
                                {[...Array(testimonial.stars)].map((_, starIndex) => (
                                    <img key={starIndex} src={star} className='star'/>
                                ))}
                            </div>
                            <p>{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial;