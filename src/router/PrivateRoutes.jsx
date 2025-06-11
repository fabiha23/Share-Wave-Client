import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthDataContext } from '../contexts/AuthDataContext';
import Loading from '../Components/Loading';

const PrivateRoutes = ({children}) => {

    const {user,loading}=use(AuthDataContext)
    const location =useLocation()

    if(loading) {return <Loading></Loading>}

    if(!user){
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;