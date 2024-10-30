import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserId" className="form-label">
          帳號
        </CFormLabel>
        <CFormInput type="text" id="validationUserId" defaultValue="" required />
        <CFormFeedback invalid>請輸入帳號</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPwd" className="form-label">
          密碼
        </CFormLabel>
        <CFormInput type="password" id="validationPwd" defaultValue="" required />
        <CFormFeedback invalid>請輸入密碼</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPwdConfirm" className="form-label">
          密碼確認
        </CFormLabel>
        <CFormInput type="password" id="validationPwdConfirm" defaultValue="" required />
        <CFormFeedback invalid>請輸入密碼</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          公司名稱
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入公司名稱</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          公司統編
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入公司統編</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          公司負責人
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入公司負責人</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          連絡人
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入連絡人姓名</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          連絡地址
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入聯繫地址</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserName" className="form-label">
          連絡電話
        </CFormLabel>
        <CFormInput type="text" id="validationUserName" defaultValue="" required />
        <CFormFeedback invalid>請輸入連絡電話</CFormFeedback>
      </div>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          建立
        </CButton>
      </CCol>
    </CForm>
  )
}
const Create = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商基本資料</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">建立完成後請提供帳號密碼給經銷商</p>
            <DocsExample href="forms/validation">{CustomStyles()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Create
