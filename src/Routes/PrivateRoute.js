import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation()

    if(loader){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate to="../sign-in" state={{from:location}} replace></Navigate>

};

export default PrivateRoute;