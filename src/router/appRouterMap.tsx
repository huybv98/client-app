import type { RouteObject } from 'react-router-dom'

import BasicLayout from 'components/Layout/index'
import Dashboard from 'views/dashboard/index'

import AuthLayout from 'views/user/AuthLayout'
import Login from 'views/user/Login'
import ReLogin from 'views/user/ReLogin'
import ForgotPassword from 'views/user/ForgotPassword'
import ForgotPasswordConfirm from 'views/user/ForgotPasswordConfirm'
import SetNewPassword from 'views/user/SetNewPassword'
import RegisterResult from 'views/user/RegisterResult'
import NotHavePermission from 'views/exception/403'
import NoMatch from 'views/exception/404'

export const asmeRouter: RouteObject = {
  path: '/',
  element: <BasicLayout />,
  loader: () => ({
    title: 'dashboard.title',
    redirect: '/dashboard/analysis',
  }),
  children: [
    // Hướng dẫn sử dụng
    {
      path: '/get-started',
      element: <Dashboard />,
      loader: () => ({
        title: 'dashboard.analysis',
      }),
    },

    // <Dashboard/>
    {
      path: '/dashboard/analysis',
      element: <Dashboard />,
      loader: () => ({
        title: 'dashboard.title',
      }),
    },
  ],
}

export const accountRouter: RouteObject[] = [
  {
    path: '/user',
    element: <AuthLayout />,
    loader: () => ({
      redirect: '/user/login',
    }),
    children: [
      {
        path: 'login',
        element: <Login />,
        loader: () => ({
          title: 'user.login.login',
        }),
      },
      {
        path: 're-login',
        element: <ReLogin />,
        loader: () => ({
          title: 'user.login.login',
        }),
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
        loader: () => ({
          title: 'user.forgot.password.title',
        }),
      },
      {
        path: 'forgot-password/confirm',
        element: <ForgotPasswordConfirm />,
        loader: () => ({
          title: 'user.forgot.password.confirm_title',
        }),
      },
      {
        path: 'forgot-password/set-new-password',
        element: <SetNewPassword />,
        loader: () => ({
          title: 'user.forgot.password.set_new_password_title',
        }),
      },
      {
        path: 'registerResult',
        element: <RegisterResult />,
      },
      {
        path: 'recover',
        element: undefined,
      },
    ],
  },
  {
    path: '/user/active-account',
    element: undefined,
    loader: () => ({
      ttitle: 'user.account.active_account.title',
    }),
  },
  {
    path: '/not-have-permission',
    element: <NotHavePermission />,
    loader: () => ({
      title: 'not_have_permission.title',
    }),
  },
  {
    path: '*',
    element: <NoMatch />,
    loader: () => ({
      title: 'NoMatch.title',
    }),
  },
]
