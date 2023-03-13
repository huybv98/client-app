import * as React from 'react'

export interface RouterMeta {
  title?: string
  breadcrumbText?: string
  redirect?: string
}

export interface Router {
  name: string
  path: string
  element?: React.ReactNode
  children?: Router[]
}
