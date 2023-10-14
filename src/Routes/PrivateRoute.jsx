import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../Components/Loading/Loading';
import { AdminState } from '../contexts/AdminProvider';

const PrivateRoute = ({ children }) => {
    const { admin, loading } = AdminState();
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (admin) {
        return children;
    }
    return <Navigate to="/registration" state={{ form: location, replace: true }} ></Navigate>
};

export default PrivateRoute;