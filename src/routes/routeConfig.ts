import { lazy } from 'react'
import type { LazyExoticComponent } from 'react'

export type RouteKey =
  | 'home'
  | 'routeManagement'
  | 'sales'
  | 'crm'
  | 'sample'

type RouteComponent = LazyExoticComponent<() => React.JSX.Element>

export type RouteItem = {
  key: RouteKey
  path: string
  label: string
  Component: RouteComponent
}

export const APP_ROUTES: RouteItem[] = [
  {
    key: 'home',
    path: '/',
    label: '메인',
    Component: lazy(async () => {
      const module = await import('../pages/HomePage')
      return { default: module.HomePage }
    }),
  },
  {
    key: 'routeManagement',
    path: '/route-management',
    label: '동선관리',
    Component: lazy(async () => {
      const module = await import('../pages/RouteManagementPage')
      return { default: module.RouteManagementPage }
    }),
  },
  {
    key: 'sales',
    path: '/sales',
    label: '영업관리',
    Component: lazy(async () => {
      const module = await import('../pages/SalesPage')
      return { default: module.SalesPage }
    }),
  },
  {
    key: 'crm',
    path: '/crm',
    label: '마케팅 CRM',
    Component: lazy(async () => {
      const module = await import('../pages/CrmPage')
      return { default: module.CrmPage }
    }),
  },
  {
    key: 'sample',
    path: '/sample',
    label: '샘플 API',
    Component: lazy(async () => {
      const module = await import('../pages/SampleApiPage')
      return { default: module.SampleApiPage }
    }),
  },
]

export const HOME_ROUTE = APP_ROUTES[0]
