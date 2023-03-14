import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import GLOBAL_LIST from 'constants/globalList'
import { useTranslation } from 'react-i18next'
const Layout = () => {
  const loaderData: any = useLoaderData()
  const location = useLocation()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const { t } = useTranslation()

  useEffect(() => {
    if (loaderData && loaderData.redirect && location.pathname !== loaderData.redirect) {
      handleRedirect(loaderData.redirect)
    }
  }, [loaderData])
  useEffect(() => {
    if (loaderData && loaderData.title) {
      setTitle(loaderData.title)
    } else {
      setTitle(GLOBAL_LIST.PROJECT_NAME)
    }
  }, [loaderData])
  const handleRedirect = (url: string) => {
    navigate(url)
  }

  return (
    <div>
      <Helmet>
        <title>{t(title)}</title>
      </Helmet>
      <div>BasicLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
