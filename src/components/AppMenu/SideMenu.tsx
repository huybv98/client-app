import React, { FC } from 'react'
import AppLogo from './Logo'
import AppMenu from './Menu'
import { HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

interface Props {
  visible?: boolean
}

const SideMenu: FC<Props> = ({ ...props }) => {
  const { visible } = props
  const menu = [
    {
      path: '/dashboard/analysis',
      title: 'Dashboard',
      icon: <HomeIcon className="w-5 h-5 w-5 h-5 ant-menu-item-icon" />,
    },
    {
      path: '/candidate-management',
      title: 'Candidate',
      icon: <AcademicCapIcon className="w-5 h-5 w-5 h-5 ant-menu-item-icon" />,
    },
  ]

  return (
    <>
      <div className="side-menu">
        <AppLogo showTitle={!visible} />
        <AppMenu menu={menu} />
      </div>
    </>
  )
}

export default SideMenu
