import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilGroup, cilGift, cilCart, cilWallet } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: '訂單管理',
    to: '/order/create',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '建立訂單',
        to: '/order/create',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '儲值管理',
    to: '/recharge/list',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '儲值紀錄',
        to: '/recharge/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '產品管理',
    to: '/product/channel1',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '渠道1',
        to: '/product/channel1',
      },
      {
        component: CNavItem,
        name: '渠道2',
        to: '/product/channel2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '經銷商管理',
    to: '/admin/user/create',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '新增經銷商',
        to: '/admin/user/create',
      },
      {
        component: CNavItem,
        name: '經銷商列表',
        to: '/admin/user/list',
      },
      {
        component: CNavItem,
        name: '經銷商分級設定',
        to: '/admin/dealer/level',
      },
    ],
  },
]

export default _nav
