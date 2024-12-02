import React, { Children, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firbase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword (auth, email, password);
     }

     const signInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const userInfo = {
          user, 
          loading,
          createUser,
          signInUser
     }
     return (
          <AuthContext.Provider value={userInfo}>
               {
                    children
               }
          </AuthContext.Provider>
     );
};

AuthProvider.propTypes = {
     
};

export default AuthProvider;