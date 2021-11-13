import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardContent = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-center">Welcome to your dashboard {user.displayName}</h1>
        </div>
    );
};

export default DashboardContent;