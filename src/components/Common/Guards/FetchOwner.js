import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import * as recipeService from '../../../servces/recipeService';
import { useErrorsContext } from '../../../context/ErrorsContext';
import { useRecipeContext } from '../../Recipe/Create/context/recipeFormContext';
import { useAuthContext } from '../../../context/AuthContext';

const FetchOwner = ({children}) => {
    
    const { logout } = useAuthContext();
    const {changeState} = useRecipeContext();
    const {addErrors} = useErrorsContext();
    const navigate = useNavigate();

    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOneById(recipeId)
            .then(async(result) => {
                changeState(result);
            })
            .catch((err) => {
                if (err.status === 401) {
                    logout();
                    navigate('/');
                } else {
                    addErrors(err.jsonRes)
                    navigate('/404')
                };
            });

    }, [recipeId ,addErrors, logout, navigate]);

    return children ? children : <Outlet />  
};

export default FetchOwner;
