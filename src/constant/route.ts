import { lazy } from 'react'

const Top = lazy(() => import('src/page/Top'))

export const routes = [
  {
    path: '/',
    title: 'TOP',
    component: Top,
    showBtmNav: true,
  },
  // Required in Cordova
  // {
  //   path: './index.html',
  //   title: 'Top',
  //   component: Top,
  //   showBtmNav: false,
  // },
]
