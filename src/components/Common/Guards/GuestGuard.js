import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';

const GuestGuard = ({children}) => {
    const { user } = useAuthContext();
    
    if (user._id) {
        return <Navigate to="/" replace />
    }

    return children ? children : <Outlet />  
};

export default GuestGuard;
