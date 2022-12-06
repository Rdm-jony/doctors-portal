import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <AppoinmentOption
                selectedDate={selectedDate}
            ></AppoinmentOption>

        </div>
    );
};

export default Appoinment;