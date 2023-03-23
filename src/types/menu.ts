import React from 'react'

export interface MenuItem {
  label: React.ReactNode
  key: React.Key
  icon?: React.ReactNode
  children?: MenuItem[]
}
export interface MenuType {
  title?: string
  icon?: React.ReactNode
  path?: string
}
