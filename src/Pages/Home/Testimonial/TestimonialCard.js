import React from 'react';

const TestimonialCard = ({ review }) => {
    const { img, name, description, location } = review;
    return (
        <div className='flex'>
            <div className="card w-96 bg-base-100 shadow-xl pb-5"
            >
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className='card-body flex-row py-0 items-center'>
                    <div className="avatar mr-2">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold '>{name}</h3>
                        <p className='text-xs'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;