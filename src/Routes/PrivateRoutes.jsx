import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-primary "></span>
    }


// user jekhane jete chay sekhane taake jete dao
    if(user){
        return children;
    }

    // noyto login e chole jao
    
    return (
        
           <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoutes;