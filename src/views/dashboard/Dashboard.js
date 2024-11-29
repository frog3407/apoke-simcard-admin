import React from 'react'
import { Link } from 'react-router-dom'
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
const Dashboard = () => {
  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardBody>
            <CTable bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '80%' }}>
                    標題
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    公告日期
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <Link to={`/dashboard/detail/1`}>產品更新通知</Link>
                  </CTableDataCell>
                  <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <Link to={`/dashboard/detail/2`}>產品下架通知</Link>
                  </CTableDataCell>
                  <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Dashboard
