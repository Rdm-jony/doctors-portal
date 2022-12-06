import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItem = <React.Fragment>
        <li><NavLink to="../home" >Home</NavLink></li>
        <li><NavLink to="../appoinment">Appoinment</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </React.Fragment>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(er => console.log(er))
    }
    return (
        <div>
            <div className="navbar bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost normal-case text-xl">daisyUI</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>

                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <>
                            <p className='text-primary font-bold mr-2'>{user?.displayName}</p>
                            <button className='btn btn-secondary' onClick={handleLogOut} type="">Log Out</button>
                        </> :
                            <NavLink to="sign-up">Log in</NavLink>

                    }
                </div>
                <label htmlFor="my-drawer-2" className="lg:hidden ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;