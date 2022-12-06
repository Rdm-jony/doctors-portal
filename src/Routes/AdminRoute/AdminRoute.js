import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';
import useAdmin from '../../Pages/useToken/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const [isAdmin,adminLoader] = useAdmin(user?.email)
    const location = useLocation()

    if (loader||adminLoader) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="../../sign-in" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;