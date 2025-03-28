import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilGroup,
  cilGift,
  cilCart,
  cilWallet,
  cilUser,
  cilNewspaper,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: '首頁',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
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
      {
        component: CNavItem,
        name: '訂單查詢',
        to: '/order/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '帳號管理',
    to: '/user/info',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '帳號資料',
        to: '/user/info',
      },
      {
        component: CNavItem,
        name: '修改密碼',
        to: '/user/pwd',
      },
    ],
  },
  {
    component: CNavTitle,
    name: '後台管理',
  },
  {
    component: CNavGroup,
    name: '帳戶管理',
    to: '/admin/user/create',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '建立帳戶',
        to: '/admin/user/create',
      },
      // {
      //   component: CNavItem,
      //   name: '管理員列表',
      //   to: '/admin/user/list',
      // },
      {
        component: CNavItem,
        name: '經銷商列表',
        to: '/admin/dealer/list',
      },
      {
        component: CNavItem,
        name: '經銷商回饋設定',
        to: '/admin/dealer/level',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '產品管理',
    to: '/admin/product/channel1',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '經銷價設定',
        to: '/admin/product/manage',
      },
      {
        component: CNavItem,
        name: '渠道1(joytel)',
        to: '/admin/product/channel1',
      },
      {
        component: CNavItem,
        name: '渠道2(tgt)',
        to: '/admin/product/channel2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '儲值管理',
    to: '/admin/recharge/list',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '儲值紀錄',
        to: '/admin/recharge/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '公告管理',
    to: '/admin/posts/list',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '公告列表',
        to: '/admin/posts/list',
      },
    ],
  },
]

export default _nav
