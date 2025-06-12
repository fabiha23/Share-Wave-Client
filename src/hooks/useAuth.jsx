import React, { use } from 'react';
import { AuthDataContext } from '../contexts/AuthDataContext';

const useAuth = () => {
    const authInfo = use(AuthDataContext)
    return authInfo
};

export default useAuth;