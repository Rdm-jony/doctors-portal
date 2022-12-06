import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetch("https://doctor-portal-server-alpha.vercel.app/users")
            .then(res => res.json())
    })

    const makeAdmin = (id) => {
        fetch(`https://doctor-portal-server-alpha.vercel.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `Beare ${localStorage.getItem("AccesToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Make an admin successfully!")
                    refetch()
                }
            })
            .catch(er => console.log(er))
    }
    return (
        <div>
            <h2 className='tezt-3xl'>All User</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => {
                                    return <tr>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {
                                                !user?.role && <button onClick={() => makeAdmin(user?._id)} className='btn btn-xs btn-primary'>Make admin</button>
                                            }
                                        </td>
                                        <td><button className='btn btn-xs'>Delete</button></td>
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

export default AllUser;