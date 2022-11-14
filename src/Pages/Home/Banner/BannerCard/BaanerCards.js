import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import BannerCard from './BannerCard';

const bannerCardsInfo=[
    {
        _id:"01",
        img:clock,
        title:"Opening Hours",
        description:"Lorem Ipsum is simply dummy text of the pri",
        bgColor:"bg-gradient-to-r from-secondary to-primary"
    },
    {
        _id:"02",
        img:marker,
        title:"Visit our location",
        description:"Brooklyn, NY 10036, United States",
        bgColor:"bg-accent",
    },
    {
        _id:"03",
        img:phone,
        title:"Contact us now",
        description:"+000 123 456789",
        bgColor:"bg-gradient-to-r from-secondary to-primary",
    }
]

const BaanerCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
            {
                bannerCardsInfo.map(card=><BannerCard key={card._id} card={card}></BannerCard>)
            }
        </div>
    );
};

export default BaanerCards;