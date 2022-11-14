import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';
import quote from '../../../assets/icons/quote.svg'


const reviews = [
    {
        _id: "01",
        img: people1,
        name: "Winson Herry",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location: "California"
    },
    {
        _id: "02",
        img: people2,
        name: "Winson Herry",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location: "California"

    },
    {
        _id: "03",
        img: people3,
        name: "Winson Herry",
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        location: "California"

    }
]
const Testimonial = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-20'>
                <div>
                <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                <h1 className='md:text-4xl text-2xl'>What Our Patients Says</h1>
                </div>
                <img className='lg:w-48 md:w-32 w-20' src={quote} alt=""></img>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                {
                    reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;