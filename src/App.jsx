import { useAuth } from './hooks/useAuth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RestrictedRoute, ProtectedRoute } from './routes';
import { lazy } from 'react';
import { SharedLayout } from './components/SharedLayout';

const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

export const App = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/home"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
