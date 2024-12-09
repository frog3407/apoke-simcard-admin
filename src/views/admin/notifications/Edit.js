import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
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
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Edit = () => {
  const { id } = useParams() // 取得路徑中的動態 ID
  const [notificationsType, setNotificationsType] = useState('add') // 新增(add)或編輯(edit)
  const [showTitle, setShowTitle] = useState('新增') // 新增(add)或編輯(edit)
  const [validated, setValidated] = useState(false)
  const [value, setValue] = useState('公告內容放在這裡')
  useEffect(() => {
    const checkType = parseInt(id, 10) || 0
    if (checkType == 0) {
      setNotificationsType('add')
      setShowTitle('新增')
    } else {
      setNotificationsType('edit')
      setShowTitle('編輯')
    }
  }, [])
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
    }
    setValidated(true)
  }

  //編輯器模組設定
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: '1' }, { header: '2' }, { size: [] }],
        //[{ font: ['Arial', 'Times New Roman', 'Courier New', 'Comic Sans MS', 'Impact','微軟正黑體'] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
          { align: [] },
        ],
        [{ color: [] }, { background: [] }, 'link', 'clean'],
      ],
    }),
    [],
  )

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'bullet',
    'align',
    'image',
    'video',
  ]

  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{showTitle}公告</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CRow className="my-3">
                <CFormLabel htmlFor="validationTitle" className="col-sm-1 col-form-label">
                  標題
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="validationTitle" defaultValue="" required />
                  <CFormFeedback invalid>請輸入標題</CFormFeedback>
                </CCol>
              </CRow>

              <CRow>
                <CCol md={12}>
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol md={12} className="mt-3 text-end">
                  <CButton color="primary" type="submit">
                    儲存
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Edit
