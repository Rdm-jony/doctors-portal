import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import UseConfirmModal from '../../useToken/useConfirmModal';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: () => fetch("https://doctor-portal-server-alpha.vercel.app/doctors")
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p>Manage Doctors</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Eamil</th>
                                <th>Speciality</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor, i) => <tr key={doctor._id}>

                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={doctor.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        {
                                            <label onClick={() => setDeleteDoctor(doctor)} htmlFor="my-modal" className="btn btn-xs btn-error">Delete</label>
                                        }

                                    </td>
                                </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            {
                deleteDoctor && <UseConfirmModal setDeleteDoctor={setDeleteDoctor} deleteDoctor={deleteDoctor} refetch={refetch}></UseConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;