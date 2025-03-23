import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
} from '@coreui/react'
import { apiGetPostsList } from '../../utils/Api'
import DOMPurify from 'dompurify'
import 'react-quill-new/dist/quill.snow.css'

const Dashboard = () => {
  const [loading, setLoading] = useState(false) // 加載狀態
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true) // 開始加載
      try {
        const response = await apiGetPostsList()
        setPosts(response.result)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false) // 加載完成
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return <CSpinner className="m-2" color="secondary" /> // 顯示加載效果
  }
  return (
    <>
      <div className="p-2">
        <CTable bordered>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                分類
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: ' 20%' }}>
                公告標題
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '50%' }}>
                公告內容
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                公告日期
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {posts.map((post) => (
              <CTableRow key={post.id}>
                <CTableDataCell>{post.categoryName}</CTableDataCell>
                <CTableDataCell>{post.title}</CTableDataCell>
                <CTableDataCell>
                  <div
                    className="ql-editor"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                  />
                </CTableDataCell>
                <CTableDataCell>{post.date}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </>
  )
}

export default Dashboard
