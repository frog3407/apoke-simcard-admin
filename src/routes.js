import React from 'react'
// simcard admin
//給經銷商用的
const OrderCreate = React.lazy(() => import('./views/order/Create'))
const RechargeList = React.lazy(() => import('./views/recharge/List'))

//給內部管理用的
const UserCreate = React.lazy(() => import('./views/admin/user/Create'))
const UserList = React.lazy(() => import('./views/admin/user/List'))
const Product1 = React.lazy(() => import('./views/product/Channel1'))
const Product2 = React.lazy(() => import('./views/product/Channel2'))

//首頁
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: '首頁' },
  { path: '/dashboard', name: '主頁', element: Dashboard },
  { path: '/order/create', name: '建立訂單', element: OrderCreate },
  { path: '/recharge/list', name: '儲值紀錄', element: RechargeList },
  { path: '/product/channel1', name: '渠道1', element: Product1 },
  { path: '/product/channel2', name: '渠道2', element: Product2 },
  { path: '/admin/user/create', name: '建立經銷商', element: UserCreate },
  { path: '/admin/user/list', name: '經銷商列表', element: UserList },
]

export default routes
