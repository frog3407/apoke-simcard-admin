import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
  CTable,
  CTableBody,
  CButton,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
} from '@coreui/react'
import MessageModal from 'src/components/MessageModal'
const Detail = () => {
  const [validated, setValidated] = useState(false)
  const [visibleRecharge, setVisibleRecharge] = useState(false)
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const userInfo = {
    id: 1,
    status: 0,
    company: 'A公司',
    taxid: '12345678',
    leader: '王小明',
    contact: '王小明',
    address: '高雄市鼓山二路1000號',
    contactnumber: '02-2222222',
    phonenumber: '0912345677',
    level: '銀光',
    createtime: '2024/11/08',
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
      //導到經銷商列表
      setVisibleRecharge(false)
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '儲值成功',
        time: 1500,
        navurl: '',
      })
    }
    setValidated(true)
  }
  return (
    <CRow>
      <MessageModal modalObj={modalObj}></MessageModal>
      <CModal
        visible={visibleRecharge}
        alignment="center"
        onClose={() => setVisibleRecharge(false)}
        aria-labelledby="addRecharge"
      >
        <CModalHeader>
          <CModalTitle>新增儲值</CModalTitle>
        </CModalHeader>
        <CForm
          className="row mx-5 g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <div className="mb-3">
              <CFormLabel htmlFor="validationValue" className="form-label">
                儲值金額
              </CFormLabel>
              <CFormInput
                type="number"
                min={1}
                id="validationValue"
                name="rechargeValue"
                defaultValue=""
                required
              />
              <CFormFeedback invalid>請輸入儲值金額</CFormFeedback>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisibleRecharge(false)}>
              取消
            </CButton>
            <CButton color="primary" type="submit">
              送出
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商詳細資料</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>編號：{userInfo.id}</CCol>
              <CCol md={4}>經銷商名稱：{userInfo.company}</CCol>
              <CCol md={4}>分級：{userInfo.level}</CCol>
            </CRow>
            <CRow>
              <CCol md={4}>統一編號：{userInfo.taxid}</CCol>
              <CCol md={4}>負責人：{userInfo.leader}</CCol>
              <CCol md={4}>連絡人：{userInfo.contact}</CCol>
            </CRow>
            <CRow>
              <CCol md={4}>連絡地址：{userInfo.address}</CCol>
              <CCol md={4}>連絡電話：{userInfo.contactnumber}</CCol>
              <CCol md={4}>手機號碼：{userInfo.phonenumber}</CCol>
            </CRow>
            <CRow>
              <CCol md={4}>建立時間：{userInfo.createtime}</CCol>
              <CCol md={6}>
                狀態：
                {userInfo.status == 0 ? (
                  <CBadge color="success">啟用</CBadge>
                ) : (
                  <CBadge color="danger">停用</CBadge>
                )}
              </CCol>
            </CRow>
            <CRow className="my-3">
              <CCol>
                <hr></hr>
              </CCol>
            </CRow>
            <CRow className="justify-content-between">
              <CCol md={4}>
                <h4>儲值紀錄</h4>
              </CCol>
              <CCol md={4} className="text-end">
                <CButton
                  color="info"
                  size="sm"
                  variant="outline"
                  className="me-2"
                  onClick={() => setVisibleRecharge(!visibleRecharge)}
                >
                  新增儲值
                </CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CTable>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell scope="col">交易號碼</CTableHeaderCell>
                      <CTableHeaderCell scope="col">交易類型</CTableHeaderCell>
                      <CTableHeaderCell scope="col">交易金額</CTableHeaderCell>
                      <CTableHeaderCell scope="col">交易後餘額</CTableHeaderCell>
                      <CTableHeaderCell scope="col">交易時間</CTableHeaderCell>
                      <CTableHeaderCell scope="col">備註</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">J20241028</CTableHeaderCell>
                      <CTableDataCell>充值</CTableDataCell>
                      <CTableDataCell>100</CTableDataCell>
                      <CTableDataCell>156</CTableDataCell>
                      <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                      <CTableDataCell>這是備註</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Detail
