import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <div>
            <div className="hero mt-20"
                style={{ "background": `url(${appointment})` }}
            >


                <div className="lg:w-2/5 w-full py-6">
                    <div className='text-center p-4'>
                        <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
                        <h1 className="md:text-4xl text-3xl text-white">Stay connected with us</h1>
                    </div>
                    <div className="w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;