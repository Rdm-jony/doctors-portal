import React, { useState } from 'react';
import SingleOption from './SingleOption';
import { format } from 'date-fns';
import OptionModal from '../OptionModal/OptionModal';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading/Loading';



const AppoinmentOption = ({ selectedDate }) => {
    const [modalData, setModalData] = useState([])
    const date = format(selectedDate, "PP")
    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ["appoinmentOptions", date],
        queryFn: () => fetch(`https://doctor-portal-server-alpha.vercel.app/appoinmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-20'>
            <p className='text-2xl font-bold text-center  text-primary'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                {
                    appoinmentOptions.map(option => <SingleOption
                        key={option._id}
                        option={option}
                        setModalData={setModalData}
                    ></SingleOption>)
                }
            </div>
            {
                modalData && <OptionModal
                    modalData={modalData}
                    selectedDate={selectedDate}
                    setModalData={setModalData}
                    refetch={refetch}
                ></OptionModal>
            }
        </div>
    );
};

export default AppoinmentOption;