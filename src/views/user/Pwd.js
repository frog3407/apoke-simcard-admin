import React, { useEffect, useState } from 'react'
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
} from '@coreui/react'
import MessageModal from 'src/components/MessageModal'

const Pwd = () => {
  const [validated, setValidated] = useState(false)
  const [modalObj, setModalObj] = useState({}) //顯示modal

  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
      setModalObj({
        alert: 'alert',
        type: 'reload',
        title: '訊息通知',
        msg: '密碼修改成功',
        time: 1500,
        navurl: '',
      })
    }
    setValidated(true)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>修改密碼</strong>
          </CCardHeader>
          <CCardBody>
            <MessageModal modalObj={modalObj}></MessageModal>
            <CForm
              className="needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputOldPwd" className="col-sm-2 col-form-label">
                  當前密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="inputOldPwd" required />
                  <CFormFeedback invalid>請輸入當前密碼</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputNewPwd" className="col-sm-2 col-form-label">
                  新密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="inputNewPwd" required />
                  <CFormFeedback invalid>請輸入新密碼</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputConfirmNewPwd" className="col-sm-2 col-form-label">
                  確認新密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="inputConfirmNewPwd" required />
                  <CFormFeedback invalid>請輸入確認新密碼</CFormFeedback>
                </CCol>
              </CRow>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  修改密碼
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Pwd
