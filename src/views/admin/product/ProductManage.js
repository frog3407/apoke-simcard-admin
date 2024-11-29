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

const ProductManage = () => {
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
        type: '',
        title: '訊息通知',
        msg: '儲存成功',
        time: 1500,
        navurl: '',
      })
      handleClickTransitionAlert(event)
    }
    setValidated(true)
  }
  const handleClickTransitionAlert = (event) => {
    setTimeout(() => {
      setValidated(false)
      //event.target.reset()
    }, 1500)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷價設定</strong>
          </CCardHeader>
          <CCardBody>
            <MessageModal modalObj={modalObj}></MessageModal>
            <CRow className="mb-3">
              <CCol sm={12}>
                <small className="text-muted">
                  成本幣值比值：例如：成本是人民幣，經銷價是新台幣，人民幣兌台幣是1:4.5，則應輸入4.5。
                  <br />
                  利潤的百分比：目標是成本的多少%做為售價即輸入多少；EX：成本300元，輸入30，則300+30%=390元
                </small>
              </CCol>
            </CRow>
            <CForm
              className="needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  渠道1-Joytel 經銷價設定
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="channel1Exchangerate" className="col-sm-2 col-form-label">
                  成本幣值比值(人民幣)
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput type="number" id="channel1Exchangerate" defaultValue="4.5" required />
                  <CFormFeedback invalid>請輸入成本幣值比值</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputChannel1Profit" className="col-sm-2 col-form-label">
                  利潤的百分比
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="inputChannel1Profit"
                    defaultValue="35"
                    min={0}
                    max={100}
                    required
                  />
                  <CFormFeedback invalid>請輸入 利潤的百分比</CFormFeedback>
                </CCol>
                <CCol sm={1} className="d-flex align-items-center">
                  %
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  渠道2-Tgt 經銷價設定
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="channel2Exchangerate" className="col-sm-2 col-form-label">
                  成本幣值比值(美金)
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput type="number" id="channel2Exchangerate" defaultValue="31" required />
                  <CFormFeedback invalid>請輸入成本幣值比值</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputChannel2Profit" className="col-sm-2 col-form-label">
                  利潤的百分比
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="inputChannel2Profit"
                    min={0}
                    max={100}
                    defaultValue="20"
                    required
                  />
                  <CFormFeedback invalid>請輸入利潤的百分比</CFormFeedback>
                </CCol>
                <CCol sm={1} className="d-flex align-items-center">
                  %
                </CCol>
              </CRow>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  儲存
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default ProductManage
