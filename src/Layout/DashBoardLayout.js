import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAdmin from '../Pages/useToken/useAdmin';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/my-appoinment">My Appoinment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/all-user">All user</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add doctor</Link></li>
                                <li><Link to="/dashboard/manage-doctors">Manage doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;