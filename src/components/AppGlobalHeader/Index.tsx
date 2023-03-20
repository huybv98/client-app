import React, { FC } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Avatar, Tooltip } from 'antd'
import {
  BellIcon,
  Cog8ToothIcon,
  EllipsisHorizontalCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

interface Props {
  collapsed?: boolean
}

const GlobalHeader: FC<Props> = ({ ...props }) => {
  const { collapsed } = props

  const toggle = () => {
    console.log('111')
  }

  return (
    <>
      <div className="header flex relative px-3">
        <div className="flex justify-center items-center w-12" onClick={toggle}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" />
          ) : (
            <MenuFoldOutlined className="trigger" />
          )}
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center ml-auto">
            <div className="menu-icon hover-app-text">
              <Tooltip title="Thiết lập & Quản trị">
                <div>
                  <Cog8ToothIcon />
                </div>
              </Tooltip>
            </div>
            <div className="menu-icon hover-app-text">
              <Tooltip title="Tiện ích">
                <div>
                  <EllipsisHorizontalCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className="menu-icon hover-app-text">
              <Tooltip title="Thông báo">
                <div>
                  <BellIcon />
                </div>
              </Tooltip>
            </div>
            <div className="menu-icon hover-app-text">
              <Tooltip title="Trợ giúp">
                <div>
                  <QuestionMarkCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className="menu-avatar">
              <Avatar size="small" className="avatar">
                BVH
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

GlobalHeader.propTypes = {
  collapsed: PropTypes.bool,
}
GlobalHeader.defaultProps = {
  collapsed: false,
}

export default GlobalHeader
