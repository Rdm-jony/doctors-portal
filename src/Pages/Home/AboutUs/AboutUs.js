import React from 'react';
import treatment from "../../../assets/images/treatment.png"
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const AboutUs = () => {
    return (
        <div>
            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 w-full'>
                        <img src={treatment} alt="" className="lg:w-3/5 w-full mx-auto rounded-lg shadow-2xl" />

                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">Exceptional Dental<br></br>
                         Care, on Your Terms</h1>
                        <p className="py-6 lg:w-3/4 w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;