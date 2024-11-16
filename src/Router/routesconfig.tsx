import { RouteObject } from 'react-router-dom'
import Home from '../features/home/Home'
import AuthPage from '../features/auth/AuthPage'
import OnboardingScreen from '../features/Onboarding/OnboardingScreen'
// import { AuthLayout } from '../features/auth/AuthLayout'
import LoginForm from '../features/auth/login/LoginForm'
import ForgetPassword from '../features/auth/forget-password/ForgetPassword'
import RegistrationForm from '../features/auth/registration/RegistratonForm'

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <OnboardingScreen />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/authPage',
    element: <AuthPage />,
  },
  {
    path: '/loginform',
    element: <LoginForm />,
  },
  {
    path: '/registrationform',
    element: <RegistrationForm />,
  },
  {
    path: '/forgetPassword',
    element: <ForgetPassword />,
  },
]
