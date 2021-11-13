import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin,isLoading} = useAuth();
    if(isLoading){
        return <div className="row justify-content-center">
            <p className="spinner-grow text-primary my-5 text-center"></p>
      </div>
    }
    return (
        <div>
            <Route
                {...rest}
                
                render={({location})=>user?.email && admin ? children
                :
                <Redirect
                    to={{
                    pathname: "/dashboard",
                    state: { from: location }
                  }}
                >

                </Redirect>}
            >

            </Route>
        </div>
    );
};

export default AdminRoute;