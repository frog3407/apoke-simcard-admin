import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'

const List = () => {
  const [userList, setUserList] = useState([
    {
      id: 1,
      company: 'A公司',
      taxid: '12345678',
      leader: '王小明',
      contact: '王小明',
      address: '高雄市',
      phonenumber: '0912345677',
      createtime: '2024/11/08',
    },
    {
      id: 1,
      company: 'B公司',
      taxid: '23454345',
      leader: '林小美',
      contact: '林小美',
      address: '台北市',
      phonenumber: '0912345677',
      createtime: '2024/10/08',
    },
  ])
  const [visibleModal, setVisibleModal] = useState(false)
  useEffect(() => {}, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商列表</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">公司名稱</CTableHeaderCell>
                  <CTableHeaderCell scope="col">公司統編</CTableHeaderCell>
                  <CTableHeaderCell scope="col">公司負責人</CTableHeaderCell>
                  <CTableHeaderCell scope="col">連絡人</CTableHeaderCell>
                  <CTableHeaderCell scope="col">連絡地址</CTableHeaderCell>
                  <CTableHeaderCell scope="col">連絡電話</CTableHeaderCell>
                  <CTableHeaderCell scope="col">建立時間</CTableHeaderCell>
                  <CTableHeaderCell scope="col">操作</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {userList.map((row, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{row['company']}</CTableHeaderCell>
                    <CTableDataCell>{row['taxid']}</CTableDataCell>
                    <CTableDataCell>{row['leader']}</CTableDataCell>
                    <CTableDataCell>{row['contact']}</CTableDataCell>
                    <CTableDataCell>{row['address']}</CTableDataCell>
                    <CTableDataCell>{row['phonenumber']}</CTableDataCell>
                    <CTableDataCell>{row['createtime']}</CTableDataCell>
                    <CTableDataCell>
                      <CButton color="info" size="sm">
                        <CIcon
                          icon={cilPencil}
                          size="sm"
                          onClick={() => setVisibleModal(!visibleModal)}
                        />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CModal
        size="xl"
        alignment="center"
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        aria-labelledby="ScrollingLongContentExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel">編輯經銷商</CModalTitle>
        </CModalHeader>
        <CModalBody>sss</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleModal(false)}>
            取消
          </CButton>
          <CButton color="primary">確認</CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}
export default List
