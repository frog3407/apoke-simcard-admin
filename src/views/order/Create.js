import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilXCircle } from '@coreui/icons'
import ChannelProducts from '../../components/ChannelProducts'

const Create = () => {
  const [validated, setValidated] = useState(false)
  const [visible, setVisible] = useState(false)
  const [selectedChannel, setselectedChannel] = useState(import.meta.env.VITE_PRODUCT_CHANNEL1)
  const handleChange = (event) => {
    setselectedChannel(event.target.value)
    console.log('handleChange value=' + event.target.value)
  }

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
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="username">客戶姓名</CFormLabel>
        <CFormInput type="text" id="username" defaultValue="" required />
        <CFormFeedback invalid>請輸入客戶姓名</CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput type="text" id="email" defaultValue="" required />
        <CFormFeedback invalid>請輸入Email</CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="cellphone">聯絡電話</CFormLabel>
        <CFormInput type="text" id="cellphone" defaultValue="" required />
        <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDefault05">備註</CFormLabel>
        <CFormInput type="text" id="validationDefault05" />
        <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDefault05">渠道類型&nbsp;&nbsp;&nbsp;&nbsp;</CFormLabel>
        <CFormCheck
          inline
          type="radio"
          value={import.meta.env.VITE_PRODUCT_CHANNEL1}
          name="channelType"
          id="fchannelType1"
          label="渠道1"
          checked={selectedChannel === import.meta.env.VITE_PRODUCT_CHANNEL1}
          onChange={handleChange}
        />
        <CFormCheck
          inline
          type="radio"
          value={import.meta.env.VITE_PRODUCT_CHANNEL2}
          name="channelType"
          id="fchannelType2"
          label="渠道2"
          checked={selectedChannel === import.meta.env.VITE_PRODUCT_CHANNEL2}
          onChange={handleChange}
        />
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDefault05">
          商品列表&nbsp;&nbsp;&nbsp;&nbsp;
          <CButton color="info" size="sm" onClick={() => setVisible(!visible)}>
            新增商品
          </CButton>
        </CFormLabel>
      </CCol>
      <CCol md={12}>
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col" className="text-nowrap">
                商品名稱
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                單價
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                數量
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                總價
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                激活日期
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                操作
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">eSIM-JOY-多地区TT（ 500MB/天）-01天</CTableHeaderCell>
              <CTableDataCell>8</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>8</CTableDataCell>
              <CTableDataCell></CTableDataCell>
              <CTableDataCell>
                <CButton color="danger" size="sm">
                  <CIcon icon={cilTrash} size="sm" />
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCol>
      <CRow className="my-2 text-end">
        <CCol>商品總價：8元</CCol>
        <CCol>商品數量：1</CCol>
        <CCol>應結算金額：8元</CCol>
      </CRow>
      <CCol xs={12} className="mb-5">
        <CButton color="primary" type="submit" className="float-end">
          送出
        </CButton>
      </CCol>
      <CModal
        size="xl"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel">商品列表</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ChannelProducts channelName={selectedChannel} isSelect={true}></ChannelProducts>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </CForm>
  )
}
export default Create
