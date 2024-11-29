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
} from '@coreui/react'

const Info = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>帳號資料</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={12} className="mb-2">
                <span className="text-primary">帳號：</span>test
              </CCol>
              <CCol md={12} className="mb-2">
                <span className="text-primary">分級[經銷商才會顯示]：</span>銀光
              </CCol>
              <CCol md={12}>
                <span className="text-primary">建立時間：</span>2024-10-28 12:16:53
              </CCol>
            </CRow>
            <CRow className="my-2">
              <CCol>
                <hr></hr>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <h6>
                  登入紀錄<small className="text-muted"> 只顯示前10筆</small>
                </h6>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CTable>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell scope="col">IP</CTableHeaderCell>
                      <CTableHeaderCell scope="col">登入時間</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell>111.111.111.111</CTableDataCell>
                      <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>111.111.111.111</CTableDataCell>
                      <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>111.111.111.111</CTableDataCell>
                      <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
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
export default Info
