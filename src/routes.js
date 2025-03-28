import React from 'react'
// simcard admin
//給經銷商用的
const OrderCreate = React.lazy(() => import('./views/order/Create'))
const OrderList = React.lazy(() => import('./views/order/List'))
const UserInfo = React.lazy(() => import('./views/user/Info'))
const UserRestPwd = React.lazy(() => import('./views/user/Pwd'))

//給內部管理用的
const UserCreate = React.lazy(() => import('./views/admin/user/Create'))
const UserList = React.lazy(() => import('./views/admin/user/List'))
const UserDetail = React.lazy(() => import('./views/admin/user/Detail'))
const ProductManage = React.lazy(() => import('./views/admin/product/ProductManage'))
const Product1 = React.lazy(() => import('./views/admin/product/Channel1'))
const Product2 = React.lazy(() => import('./views/admin/product/Channel2'))
const LevelManage = React.lazy(() => import('./views/admin/dealer/LevelManage'))
const DealerUserList = React.lazy(() => import('./views/admin/dealer/List'))
const AdminRechargeList = React.lazy(() => import('./views/admin/recharge/List'))
const PostsList = React.lazy(() => import('./views/admin/posts/List'))
const PostsEdit = React.lazy(() => import('./views/admin/posts/Edit'))
const PostsAdd = React.lazy(() => import('./views/admin/posts/Add'))
//首頁
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DashboardDetail = React.lazy(() => import('./views/dashboard/Detail'))

const routes = [
  { path: '/', exact: true, name: '首頁' },
  { path: '/dashboard', name: '主頁', element: Dashboard },
  { path: '/dashboard/detail/:id', name: '公告內容', element: DashboardDetail },
  { path: '/order/create', name: '建立訂單', element: OrderCreate },
  { path: '/order/list', name: '訂單查詢', element: OrderList },
  { path: '/user/info', name: '帳號資料', element: UserInfo },
  { path: '/user/pwd', name: '修改密碼', element: UserRestPwd },
  { path: '/admin/recharge/list', name: '儲值紀錄', element: AdminRechargeList },
  { path: '/admin/product/manage', name: '經銷價設定', element: ProductManage },
  { path: '/admin/product/channel1', name: '渠道1(joytel)', element: Product1 },
  { path: '/admin/product/channel2', name: '渠道2(tgt)', element: Product2 },
  { path: '/admin/user/create', name: '建立帳戶', element: UserCreate },
  { path: '/admin/user/list', name: '管理者列表', element: UserList },
  { path: '/admin/dealer/list', name: '經銷商列表', element: DealerUserList },
  { path: '/admin/user/detail/:id', name: '經銷商詳細資料', element: UserDetail }, //這邊的path有改要改AppBreadcrumb.js裡面的邏輯
  { path: '/admin/dealer/level', name: '經銷商金額回饋設定', element: LevelManage },
  { path: '/admin/posts/list', name: '公告列表', element: PostsList },
  { path: '/admin/posts/edit/:id', name: '編輯公告', element: PostsEdit },
  { path: '/admin/posts/add', name: '新增公告', element: PostsAdd },
]

export default routes
