import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import HomeSeviceCard from './HomeSeviceCard';

const homeServices=[
    {
        _id:"01",
        img:fluoride,
        title:"Fluoride Treatment",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
        _id:"02",
        img:cavity,
        title:"Cavity Filling",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"

    },
    {
        _id:"03",
        img:whitening,
        title:"Teeth Whitening",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"

    }
]

const HomeServices = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary'>OUR SERVICES</h2>
                <h1 className='text-3xl font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    homeServices.map(homeService=><HomeSeviceCard
                    key={homeService._id}
                    homeService={homeService}
                    ></HomeSeviceCard>)
                }
            </div>
        </div>
    );
};

export default HomeServices;