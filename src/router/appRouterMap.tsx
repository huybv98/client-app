import type { RouteObject } from 'react-router-dom'
import React from 'react'

const AppLayout = React.lazy(() => import('components/AppLayout/index'))
const Dashboard = React.lazy(() => import('views/dashboard/index'))
const Candidate = React.lazy(() => import('views/candidate/Index'))
const CandidateCreate = React.lazy(() => import('views/candidate/Create'))
const CandidateDetail = React.lazy(() => import('views/candidate/Detail'))
const CandidateEdit = React.lazy(() => import('views/candidate/Edit'))

const AuthLayout = React.lazy(() => import('views/user/AuthLayout'))
const Login = React.lazy(() => import('views/user/Login'))
const ReLogin = React.lazy(() => import('views/user/ReLogin'))
const ForgotPassword = React.lazy(() => import('views/user/ForgotPassword'))
const ForgotPasswordConfirm = React.lazy(() => import('views/user/ForgotPasswordConfirm'))
const SetNewPassword = React.lazy(() => import('views/user/SetNewPassword'))
const RegisterResult = React.lazy(() => import('views/user/RegisterResult'))
const NotHavePermission = React.lazy(() => import('views/exception/403'))
const NoMatch = React.lazy(() => import('views/exception/404'))
const Home = React.lazy(() => import('views/home'))

export const asmeRouter: RouteObject = {
  path: '/',
  element: <AppLayout />,
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

    // Dashboard
    {
      path: '/dashboard/analysis',
      element: <Dashboard />,
      loader: () => ({
        title: 'dashboard.title',
      }),
    },
    // Candidate Management
    {
      path: '/candidate-management',
      element: <Candidate />,
      loader: () => ({
        title: 'candidate.title',
        breadcrumbText: 'candidate.breadcrumbText',
      }),
    },
    {
      path: '/candidate-management/create',
      element: <CandidateCreate />,
      loader: () => ({
        title: 'candidate.create.title',
        breadcrumbText: 'candidate.create.breadcrumbText',
      }),
    },
    {
      path: '/candidate-management/:id/detail',
      element: <CandidateDetail />,
      loader: () => ({
        title: 'candidate.detail.title',
        breadcrumbText: 'candidate.detail.breadcrumbText',
      }),
    },
    {
      path: '/candidate-management/:id/edit',
      element: <CandidateEdit />,
      loader: () => ({
        title: 'candidate.edit.title',
        breadcrumbText: 'candidate.edit.breadcrumbText',
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
  {
    path: 'Home',
    element: <Home />,
  },
]
