import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import GLOBAL_LIST from 'constants/globalList'
import { useTranslation } from 'react-i18next'
import { Layout } from 'antd'
import GlobalHeader from 'components/AppGlobalHeader/Index'
import GlobalFooter from 'components/AppGlobalFooter/Index'
import SideMenu from 'components/AppMenu/SideMenu'
import { Background, Colors, LayoutHeight } from 'style/variables'

const { Header, Footer, Sider, Content } = Layout
const Style: React.CSSProperties = {
  backgroundColor: Background.primary,
  color: Colors.primary,
}
const siderStyle: React.CSSProperties = {
  backgroundColor: Background.secondary,
  minHeight: '100vh',
  color: Colors.white,
}
const headerStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  height: LayoutHeight.Height,
  lineHeight: LayoutHeight.lineHeight,
  color: 'inherit',
}
const footerStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  height: LayoutHeight.Height,
  lineHeight: LayoutHeight.lineHeight,
  color: 'inherit',
}

const AppLayout = () => {
  // eslint-disable-next-line
  const loaderData: any = useLoaderData()
  const location = useLocation()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const { t } = useTranslation()
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (
      loaderData &&
      loaderData.redirect &&
      location.pathname === '/' &&
      location.pathname !== loaderData.redirect
    ) {
      handleRedirect(loaderData.redirect)
    }
  }, [loaderData, location])
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

  const handleChangeVisible = (visible: boolean) => {
    setVisible(visible)
  }

  return (
    <div>
      <Helmet>
        <title>{t(title)}</title>
      </Helmet>
      <Layout style={Style}>
        <Sider collapsed={visible} style={siderStyle} collapsedWidth={64} width={280}>
          <SideMenu visible={visible} />
        </Sider>
        <Layout style={Style}>
          <Header style={headerStyle} className="p-0">
            <GlobalHeader visible={visible} onChangeVisible={handleChangeVisible} />
          </Header>
          <div className="inner-layout">
            <Content>
              <div className="content p-6">
                <Outlet />
              </div>
            </Content>
            <Footer style={footerStyle} className="p-0">
              <GlobalFooter />
            </Footer>
          </div>
        </Layout>
      </Layout>
    </div>
  )
}

export default AppLayout
