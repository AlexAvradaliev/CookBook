import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';

const PrivateGuard = ({children}) => {
    const { user } = useAuthContext();
    
    if (!user._id) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateGuard;
