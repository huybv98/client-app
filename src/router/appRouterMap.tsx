import type { RouteObject } from 'react-router-dom'

import BasicLayout from 'components/Layout/index'
import Dashboard from 'views/dashboard/index'
import NoMatch from 'views/exception/404'

export const asmeRouter: RouteObject = {
  path: '/',
  element: <BasicLayout />,
  loader: () => ({
    title: 'menu.home',
    redirect: '/dashboard/analysis',
  }),
  children: [
    // Hướng dẫn sử dụng
    {
      path: '/get-started',
      element: <Dashboard />,
      loader: () => ({
        title: 'menu.dashboard.title',
      }),
    },

    // <Dashboard/>
    {
      path: '/dashboard/analysis',
      element: <Dashboard />,
      loader: () => ({
        title: 'menu.dashboard.title',
      }),
    },
  ],
}

export const accountRouter: RouteObject = {
  path: '*',
  element: <NoMatch />,
  loader: () => ({
    title: 'menu.NoMatch.title',
  }),
}
