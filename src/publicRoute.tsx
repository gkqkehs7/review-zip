import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const accessToken = localStorage.getItem('accessToken');

  return accessToken ? <Navigate to="/mainPage" /> : <Outlet />;
};

export default PublicRoute;
