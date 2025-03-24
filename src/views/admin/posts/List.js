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
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
  CSpinner,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { apiGetPostsList, apiDeletePost } from '../../../utils/Api'
import DOMPurify from 'dompurify'
import 'react-quill-new/dist/quill.snow.css'
import MessageModal from 'src/components/MessageModal'

const List = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false) // 加載狀態
  const [posts, setPosts] = useState([])
  const [deletePostVisible, setDeletePostVisible] = useState(false)
  const [deletePostId, setDeletePostId] = useState(null)
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
  const handleDeleteModal = (id) => {
    // 顯示刪除確認視窗
    setDeletePostVisible(true)
    setDeletePostId(id)
  }
  const handleDeleteClick = async () => {
    console.log('go Delete:', deletePostId)
    try {
      setDeletePostVisible(false)
      const result = await apiDeletePost(deletePostId)
      if (result.code === '0000') {
        setPosts(posts.filter((post) => post.id !== deletePostId)) // 移除符合 deletePostId 的項目
      } else {
        console.error('刪除失敗，錯誤訊息:', result.message)
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '刪除失敗，錯誤訊息:' + result.message,
          time: 0,
          navurl: '',
          closebtn: true,
          timestamp: Date.now(),
        })
      }
    } catch (error) {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '刪除失敗，錯誤訊息:' + error,
        time: 0,
        navurl: '',
        closebtn: true,
        timestamp: Date.now(),
      })
    }
  }

  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <MessageModal modalObj={modalObj}></MessageModal>
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
                      <CTooltip content="刪除">
                        <CButton
                          color="danger"
                          size="sm"
                          variant="outline"
                          className="me-2"
                          onClick={() => handleDeleteModal(post.id)}
                        >
                          <CIcon icon={cilTrash} size="sm" />
                        </CButton>
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <CModal
              visible={deletePostVisible}
              onClose={() => setDeletePostVisible(false)}
              aria-labelledby="DeletePostLabel"
            >
              <CModalHeader>
                <CModalTitle id="DeletePostLabel">刪除公告</CModalTitle>
              </CModalHeader>
              <CModalBody>確認要刪除此公告?</CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setDeletePostVisible(false)}>
                  取消
                </CButton>
                <CButton color="danger" onClick={() => handleDeleteClick()}>
                  刪除
                </CButton>
              </CModalFooter>
            </CModal>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default List
