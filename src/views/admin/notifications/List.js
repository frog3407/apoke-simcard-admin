import React from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CButton,
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
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
const List = () => {
  const navigate = useNavigate()
  const handleEditClick = (id) => {
    navigate('/admin/notifications/edit/' + id)
  }

  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardBody>
            <CRow className="text-end mb-3">
              <CCol>
                <CButton
                  color="info"
                  size="sm"
                  variant="outline"
                  className="me-2"
                  onClick={() => handleEditClick(0)}
                >
                  新增公告
                </CButton>
              </CCol>
            </CRow>

            <CTable bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '70%' }}>
                    標題
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                    公告日期
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    操作
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>產品更新通知</CTableDataCell>
                  <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="info"
                      size="sm"
                      variant="outline"
                      className="me-2"
                      onClick={() => handleEditClick(1)}
                    >
                      <CIcon icon={cilPencil} size="sm" />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>產品下架通知</CTableDataCell>
                  <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="info"
                      size="sm"
                      variant="outline"
                      className="me-2"
                      onClick={() => handleEditClick(2)}
                    >
                      <CIcon icon={cilPencil} size="sm" />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default List
