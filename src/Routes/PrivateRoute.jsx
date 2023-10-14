import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../Components/Loading/Loading';
import { TeacherState } from '../contexts/TeacherProvider';

const PrivateRoute = ({ children }) => {
    const { teacher, loading } = TeacherState()

    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (teacher) {
        return children;
    }
    return <Navigate to="/registration" state={{ form: location, replace: true }} ></Navigate>
};

export default PrivateRoute;