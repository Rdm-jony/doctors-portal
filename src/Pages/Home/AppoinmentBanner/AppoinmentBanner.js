import React from 'react';
import doctorSmaill from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'
const AppoinmentBanner = () => {
    return (
        <section>
            <div className="hero mt-40"
                style={{ "background": `url(${appointment})` }}
            >
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div className='lg:w-1/2 w-full -mt-28 hidden md:block'>
                        <img src={doctorSmaill} alt="" className="w-full rounded-lg " />
                    </div>
                    <div className='lg:w-1/2 w-full text-white p-6'>
                        <p className='text-xl text-primary font-bold mb-5'>Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;