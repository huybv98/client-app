import React, { FC, Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import AppSpinner from 'components/AppSpinner/index'
import router from 'router/index'

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<AppSpinner type="fallback" />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRoutes
