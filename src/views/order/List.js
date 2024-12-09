import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
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
  CImage,
  CTooltip,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilQrCode, cilInfo } from '@coreui/icons'

const List = () => {
  const [visibleQrCode, setVisibleQrCode] = useState(false)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>訂單查詢</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table#table-head">
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">商品名稱</CTableHeaderCell>
                    <CTableHeaderCell scope="col">使用地</CTableHeaderCell>
                    <CTableHeaderCell scope="col">單價</CTableHeaderCell>
                    <CTableHeaderCell scope="col">數量</CTableHeaderCell>
                    <CTableHeaderCell scope="col">開通狀態</CTableHeaderCell>
                    <CTableHeaderCell scope="col">開通日期</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">操作</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow color="info">
                    <CTableDataCell colSpan="8" className="order-main-text align-middle">
                      <CRow>
                        <CCol xs={12}>
                          <span className="fw-bold">訂單編號：</span>
                          J20241028&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">客戶姓名：</span>
                          王曉明&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">訂單狀態：</span>
                          已發貨&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">渠道選擇：</span>
                          渠道1&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">總金額：</span>
                          550&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">下單日期：</span>
                          2024-10-28 12:16:53&nbsp;&nbsp;&nbsp;&nbsp;
                        </CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>高速上網1天1G</CTableDataCell>
                    <CTableDataCell>日本</CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>已開通</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>abc@gmail.com</CTableDataCell>
                    <CTableDataCell>
                      <CTooltip content="檢視QrCode">
                        <CButton
                          color="info"
                          size="sm"
                          variant="outline"
                          className="me-2"
                          onClick={() => setVisibleQrCode(!visibleQrCode)}
                        >
                          <CIcon icon={cilQrCode} size="sm" />
                        </CButton>
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>高速上網1天1G</CTableDataCell>
                    <CTableDataCell>台灣</CTableDataCell>
                    <CTableDataCell>350</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>已開通</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>abc@gmail.com</CTableDataCell>
                    <CTableDataCell>
                      <CTooltip content="檢視QrCode">
                        <CButton
                          color="info"
                          size="sm"
                          variant="outline"
                          className="me-2"
                          onClick={() => setVisibleQrCode(!visibleQrCode)}
                        >
                          <CIcon icon={cilQrCode} size="sm" />
                        </CButton>
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow color="info">
                    <CTableDataCell colSpan="8" className="order-main-text align-middle">
                      <CRow>
                        <CCol xs={12}>
                          <span className="fw-bold">訂單編號：</span>
                          J20241028&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">客戶姓名：</span>
                          王曉明&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">訂單狀態：</span>
                          已發貨&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">渠道選擇：</span>
                          渠道1&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">總金額：</span>
                          550&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="fw-bold">下單日期：</span>
                          2024-10-28 12:16:53&nbsp;&nbsp;&nbsp;&nbsp;
                        </CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>高速上網1天1G</CTableDataCell>
                    <CTableDataCell>日本</CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>已開通</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>abc@gmail.com</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        size="sm"
                        variant="outline"
                        className="me-2"
                        onClick={() => setVisibleQrCode(!visibleQrCode)}
                      >
                        <CIcon icon={cilQrCode} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>高速上網1天1G</CTableDataCell>
                    <CTableDataCell>台灣</CTableDataCell>
                    <CTableDataCell>350</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>已開通</CTableDataCell>
                    <CTableDataCell>2024-10-28 12:16:53</CTableDataCell>
                    <CTableDataCell>abc@gmail.com</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        size="sm"
                        variant="outline"
                        className="me-2"
                        onClick={() => setVisibleQrCode(!visibleQrCode)}
                      >
                        <CIcon icon={cilQrCode} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
            <CModal
              visible={visibleQrCode}
              alignment="center"
              size="sm"
              onClose={() => setVisibleQrCode(false)}
              aria-labelledby="showQrCode"
            >
              <CModalHeader>
                <CModalTitle>查看QRCode</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CImage fluid src="./SE20241009131949026.png" />
              </CModalBody>
            </CModal>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default List
