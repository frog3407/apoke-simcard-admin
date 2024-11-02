import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 驗證 Token 並返回 sub
export const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log('payload:' + payload)
    console.log('payload.sub:' + payload.sub)
    const isTokenValid = payload.exp * 1000 > Date.now()

    if (!isTokenValid) {
      console.log('isTokenValid:' + isTokenValid)
      return null
    } else {
      console.log('payload.sub:' + payload.sub)
      return payload.sub
    }
  } catch (error) {
    console.error('Invalid token format', error)
    return null
  }
}

// 自定義 Hook 檢查認證狀態
export const useAuth = () => {
  const [sub, setSub] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const userSub = isAuthenticated()

    if (!userSub) {
      navigate('/login')
    } else {
      console.log('userSub:' + userSub)
      setSub(userSub) // 設置 sub 值
    }
  }, [navigate])
  return sub // 返回 sub
}
