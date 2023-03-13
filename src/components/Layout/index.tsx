import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import GLOBAL_LIST from 'constants/globalList'
const Layout = () => {
  const loaderData: any = useLoaderData()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>(GLOBAL_LIST.PROJECT_NAME)

  useEffect(() => {
    if (loaderData && loaderData.redirect) {
      navigate(loaderData.redirect)
    }
  }, [loaderData])
  useEffect(() => {
    if (loaderData && loaderData.title) {
      setTitle(loaderData.title)
    }
  }, [loaderData])
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>BasicLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
