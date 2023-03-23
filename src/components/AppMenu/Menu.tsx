import React, { FC, useEffect, useState } from 'react'
import { MenuItem, MenuType } from 'types/menu'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

interface Props {
  menu?: Array<MenuType>
}

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const getListItem = (menu: MenuType[] | undefined) => {
  const items: MenuItem[] = []
  if (menu && menu.length) {
    menu.forEach((obj, index) => {
      const item = getItem(obj.title, (index + 1).toString(), obj.icon)
      items.push(item)
    })
  }
  return items
}

const AppMenu: FC<Props> = ({ ...props }) => {
  const { menu } = props
  const [MenuItems, setMenuItems] = useState<Array<MenuItem>>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (MenuItems && MenuItems.length === 0) {
      const items: Array<MenuItem> = getListItem(menu)
      setMenuItems(items)
    }
  }, [MenuItems, menu])
  const handleClick: MenuProps['onClick'] = (e) => {
    const obj: MenuType[] | undefined = menu && menu.splice(parseInt(e.key) - 1, 1)
    if (obj && obj[0]) {
      const url: string | undefined = obj[0]?.path
      navigate(url || '')
    }
  }

  return (
    <>
      <div className="app-menu">
        {MenuItems && (
          <>
            <div className="sidebar-collapse">
              <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                items={MenuItems}
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AppMenu
