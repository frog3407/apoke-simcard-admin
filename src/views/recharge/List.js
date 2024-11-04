import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const List = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>儲值紀錄</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#table-head">
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">交易號碼</CTableHeaderCell>
                    <CTableHeaderCell scope="col">付款方式</CTableHeaderCell>
                    <CTableHeaderCell scope="col">交易金額</CTableHeaderCell>
                    <CTableHeaderCell scope="col">交易後餘額</CTableHeaderCell>
                    <CTableHeaderCell scope="col">交易時間</CTableHeaderCell>
                    <CTableHeaderCell scope="col">備註</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">J20241028</CTableHeaderCell>
                    <CTableDataCell>匯款</CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                    <CTableDataCell>156</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>線下交易</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default List
