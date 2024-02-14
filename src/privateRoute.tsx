import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const accessToken = localStorage.getItem('accessToken');

  return accessToken ? <Outlet /> : <Navigate to="/signinPage" />;
};

export default PrivateRoute;
