import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png';
import BaanerCards from './BannerCard/BaanerCards';

const Banner = () => {
    return (
        <header style={{"background":`url(${bg})`,"backgroundRepeat":"no-repeat","backgroundPosition":"cover"}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 w-full'>
                        <img  src={chair} alt='' className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
            <div>
                <BaanerCards></BaanerCards>
            </div>
        </header>
    );
};

export default Banner;