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
                    <CTableHeaderCell scope="col">收支類型</CTableHeaderCell>
                    <CTableHeaderCell scope="col">收支金額</CTableHeaderCell>
                    <CTableHeaderCell scope="col">交易狀態</CTableHeaderCell>
                    <CTableHeaderCell scope="col">交易時間</CTableHeaderCell>
                    <CTableHeaderCell scope="col">備註</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>J20241028</CTableDataCell>
                    <CTableDataCell>支出</CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                    <CTableDataCell>交易成功</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>購買訂單號碼-F20241028</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>J20241028</CTableDataCell>
                    <CTableDataCell>收入</CTableDataCell>
                    <CTableDataCell>1500</CTableDataCell>
                    <CTableDataCell>交易成功</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>線下儲值</CTableDataCell>
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
