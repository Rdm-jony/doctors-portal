import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';
// https://doctor-portal-server-alpha.vercel.app/bookings
const MyAppoinment = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: () => fetch(`https://doctor-portal-server-alpha.vercel.app/bookings?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("AccesToken")}`
            }
        })
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl my-5'>My Appoinment</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings?.map((booking, i) => {
                                    return <tr>
                                        <th>{i + 1}</th>
                                        <td>{booking?.patien}</td>
                                        <td>{booking?.treatmantName}</td>
                                        <td>{booking?.slot}</td>
                                        <td>{booking?.date}</td>
                                        <td>${booking?.price}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppoinment;