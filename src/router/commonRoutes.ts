import { accountRouter, asmeRouter } from './appRouterMap'
import type { RouteObject } from 'react-router-dom'

export default [asmeRouter, ...accountRouter] as RouteObject[]
