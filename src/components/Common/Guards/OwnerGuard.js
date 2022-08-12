import { Outlet, Navigate } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import { useRecipeContext } from '../../Recipe/Create/context/recipeFormContext';

const OwnerGuard = ({children}) => {
    
    const { user } = useAuthContext();
    const {recipe} = useRecipeContext();

if(user._id !== recipe._ownerId?._id){
    return <Navigate to="/" replace />
}
    return children ? children : <Outlet />  
};

export default OwnerGuard;
