import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { apiGetPostsList } from '../../../utils/Api'
import DOMPurify from 'dompurify'
import 'react-quill-new/dist/quill.snow.css'

const List = () => {
  const navigate = useNavigate()
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

  const handleEditClick = (id) => {
    console.log('go Edit:', id)
    navigate('/admin/posts/edit/' + id)
  }
  const handleAddClick = () => {
    console.log('go Add')
    navigate('/admin/posts/add')
  }

  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardBody>
            <CRow className="text-end mb-3">
              <CCol>
                <CButton
                  color="info"
                  size="sm"
                  variant="outline"
                  className="me-2"
                  onClick={() => handleAddClick()}
                >
                  新增公告
                </CButton>
              </CCol>
            </CRow>

            <CTable bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    分類
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: ' 20%' }}>
                    公告標題
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '40%' }}>
                    公告內容
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    公告日期
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    操作
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
                    <CTableDataCell>
                      <CTooltip content="編輯">
                        <CButton
                          color="info"
                          size="sm"
                          variant="outline"
                          className="me-2"
                          onClick={() => handleEditClick(post.id)}
                        >
                          <CIcon icon={cilPencil} size="sm" />
                        </CButton>
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default List
