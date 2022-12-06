import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';


const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
    return (
        <div>
            <header style={{ "background": `url(${bg})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundSize": "cover" }}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='lg:w-1/2 w-full'>
                            <img src={chair} alt='' className="w-full rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2 w-full flex justify-center'>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AppoinmentBanner;