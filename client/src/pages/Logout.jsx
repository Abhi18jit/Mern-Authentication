import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contextStore/authContext';

const Logout = () => {

    const {logoutUser}=useAuth();
    useEffect(() => {
        logoutUser();
    }, [logoutUser]);

    return <Navigate to="/login" />
}

export default Logout
