import React, { FC, useEffect, useState } from 'react'
import AppLogo from './Logo'
import AppMenu from './Menu'
import routes from 'router/commonRoutes'
import { deepFlatArray } from '../../utils/util'

const SideMenu: FC = () => {
  const [menu, setMenu] = useState<Array<any>>([])
  useEffect(() => {
    if (menu && menu.length <= 0) {
      const router = deepFlatArray(routes)

      setMenu(router)
      console.log('router', router)
    }
  }, [menu])
  console.log('menu', menu)
  return (
    <>
      <div className="side-menu">
        <AppLogo />
        <AppMenu />
      </div>
    </>
  )
}

export default SideMenu
