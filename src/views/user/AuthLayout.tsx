import React, { FC, useEffect } from 'react'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
const AuthLayout: FC = () => {
  const loaderData: any = useLoaderData()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (loaderData && loaderData.redirect && location.pathname !== loaderData.redirect) {
      navigate(loaderData.redirect)
    }
  }, [loaderData])
  return (
    <>
      <div>AuthLayout</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout
