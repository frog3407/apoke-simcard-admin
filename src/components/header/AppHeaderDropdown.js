import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilUser, cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useAuth } from '../../utils/Auth'
import { apiLogout, removeAuthToken } from '../../utils/Api'
const AppHeaderDropdown = () => {
  const username = useAuth() // 取得 sub 值
  console.log('username:' + username)
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const result = await apiLogout()
      console.log('result=' + JSON.stringify(result))
      if (result.code === '0000') {
        removeAuthToken()
        navigate('/login')
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error fetching lofout:', error)
    }
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <div className="p-2">{username}</div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader> */}

        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          登出
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
