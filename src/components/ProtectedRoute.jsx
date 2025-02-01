import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../providers/AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // Show a loading spinner or message
    }

    if (!user) {
        return <Navigate to="/signIn" replace />; // Redirect to Sign In page if not authenticated
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;