import React, { useState, useEffect, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormFeedback,
  CButton,
  CFormSelect,
  CSpinner,
} from '@coreui/react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { apiGetPostsCategories, apiGetPost, apiAddPost, apiEditPost } from '../../../utils/Api'
import MessageModal from 'src/components/MessageModal'

// 提取 ReactQuill 的 modules 和 formats 到組件外部
const quillModules = {
  toolbar: [
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
    [{ color: [] }, { background: [] }],
  ],
}

const quillFormats = [
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'list',
  'indent',
  'blockquote',
  'code-block',
  'link',
  'align',
  'image',
  'video',
]

const PostForm = ({ type, id }) => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [showTitle] = useState(type === 'add' ? '新增' : '儲存')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postCategory, setPostCategory] = useState(99)
  const [selectCategories, setSelectCategories] = useState([])
  const [errors, setErrors] = useState({
    postTitle: false,
    postContent: false,
    postCategory: false,
  })
  const [errorMessage, setErrorMessage] = useState('') //錯誤訊息
  const [loading, setLoading] = useState(false) // 加載狀態
  console.log('type:', type)
  console.log('PostForm id:', id) // 確認是否正確接收到 id

  useEffect(() => {
    const fetchPostsCategories = async () => {
      setLoading(true) // 開始加載
      try {
        const result = await apiGetPostsCategories()

        if (result.code === '0000') {
          setSelectCategories(result.result)
        } else {
          console.log('result.result:', result.result)
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false) // 加載完成
      }
    }
    fetchPostsCategories()
  }, [])

  useEffect(() => {
    if (type === 'edit' && id) {
      const fetchPost = async () => {
        setLoading(true) // 開始加載
        try {
          const result = await apiGetPost(id)
          if (result.code === '0000') {
            console.log('result.result:', result.result)
            setPostTitle(result.result.title)
            setPostContent(result.result.content)
            setPostCategory(result.result.categoryId)
          } else {
            console.log('result.result:', result.result)
          }
        } catch (error) {
          console.error('Failed to fetch posts:', error)
        } finally {
          setLoading(false) // 加載完成
        }
      }
      fetchPost()
    }
  }, [type, id])

  if (loading) {
    return <CSpinner className="m-2" color="secondary" /> // 顯示加載效果
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()

    let isValid = true
    let newErrors = { ...errors }
    const title = form.elements.inputTitle.value
    if (title === '') {
      newErrors.postTitle = true
      isValid = false
    }
    if (postContent === '') {
      newErrors.postContent = true
      isValid = false
    }
    if (postCategory === 99) {
      newErrors.postCategory = true
      isValid = false
    }
    setErrors(newErrors)
    if (!isValid) {
      return
    }
    console.log('postTitle:', title)
    console.log('postContent:', postContent)
    console.log('postCategory:', postCategory)

    // 呼叫API
    if (type === 'add') {
      let sendAddData = {
        title: title,
        content: postContent,
        categoryid: postCategory,
      }
      fetchAddPost(sendAddData)
    } else {
      let sendEditData = {
        id: id,
        title: title,
        content: postContent,
        categoryid: postCategory,
      }
      fetchEditPost(sendEditData)
    }
  }

  const fetchAddPost = async (sendData) => {
    try {
      console.log('sendData:' + sendData)
      const result = await apiAddPost(sendData)
      console.log('result:' + result)
      if (result.code === '0000') {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '新增成功',
          time: 2500,
          navurl: '/admin/posts/list',
          closebtn: false,
          timestamp: Date.now(),
        })
      } else {
        setErrorMessage('新增失敗：' + result.message)
      }
    } catch (error) {
      setErrorMessage('新增失敗，錯誤訊息:' + error)
    }
  }

  const fetchEditPost = async (sendData) => {
    try {
      const result = await apiEditPost(id, sendData)
      console.log('result:' + result)
      if (result.code === '0000') {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '儲存成功',
          time: 2500,
          navurl: '',
          closebtn: false,
          timestamp: Date.now(),
        })
      } else {
        setErrorMessage('儲存失敗：' + result.message)
      }
    } catch (error) {
      setErrorMessage('儲存失敗，錯誤訊息:' + error)
    }
  }

  return (
    <div className="p-2">
      <CCard className="mb-4">
        <CCardHeader>
          <strong>{showTitle}公告</strong>
        </CCardHeader>
        <CCardBody>
          <MessageModal modalObj={modalObj}></MessageModal>
          <CForm className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <CRow className="my-3">
              <CFormLabel htmlFor="title" className="col-sm-1 col-form-label">
                標題
              </CFormLabel>
              <CCol sm={6}>
                <CFormInput
                  type="text"
                  id="inputTitle"
                  defaultValue={postTitle}
                  className={errors.postTitle ? 'is-invalid' : ''}
                />
                {errors.postTitle && <CFormFeedback invalid>請輸入標題</CFormFeedback>}
              </CCol>
            </CRow>
            <CRow className="my-3">
              <CFormLabel htmlFor="category" className="col-sm-1 col-form-label">
                公告分類
              </CFormLabel>
              <CCol sm={6}>
                <CFormSelect
                  value={postCategory}
                  id="inputCategory"
                  onChange={(e) => setPostCategory(e.target.value)}
                  className={errors.postCategory ? 'is-invalid' : ''}
                >
                  <option value="99">請選擇公告的分類</option>
                  {selectCategories.map((row, index) => (
                    <option key={index} value={row['id']}>
                      {row['name']}
                    </option>
                  ))}
                </CFormSelect>
                {errors.postCategory && <CFormFeedback invalid>請選擇公告的分類</CFormFeedback>}
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12} style={{ height: '350px' }}>
                <ReactQuill
                  id="inputContent"
                  theme="snow"
                  placeholder="請輸入公告內容"
                  modules={quillModules}
                  formats={quillFormats}
                  value={postContent}
                  onChange={setPostContent}
                  style={{ height: '300px' }}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={2} className="mt-3">
                <CButton color="primary" type="submit">
                  {showTitle}
                </CButton>
              </CCol>
              {errorMessage && <div className="col-md-10 text-danger">{errorMessage}</div>}
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}
PostForm.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
}

export default PostForm
