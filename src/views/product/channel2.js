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
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const PageSize = 10 // 每次請求的資料數量
const apiHost = import.meta.env.VITE_API_HOST
const Channel2 = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1) // 當前頁碼
  const [itemsPerPage] = useState(5) // 每頁顯示的資料數量
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])

  const fetchData = async (page) => {
    try {
      const response = await fetch(`${apiHost}/api/simcard/channel2/products?page=${page}`)
      const result = await response.json()
      console.log('apiHost=' + apiHost)
      console.log('result.total=' + result.total)
      setData(result.data) // 更新狀態
      // 根據返回的資料更新總頁數，假設後端有提供 totalCount 或者有其他方式獲取總數
      setTotalPages(Math.ceil(result.total / PageSize))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  // 切換頁面時更新顯示資料
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
  }, [currentPage, itemsPerPage])

  const displayOrder = ['productName', 'productType', 'activeType', 'settlementPrice']
  const excludedKeys = [
    'productCode',
    'periodType',
    'ruleDesc',
    'days',
    'apnDesc',
    'isContract',
    'validityPeriod',
    'dataUnit',
    'mcc',
    'operatorDesc',
    'dataTotal',
    'minOrderCycle',
    'lastModifiedTime',
    'dataLimited',
  ]
  const getCellStyle = (key) => {
    switch (key) {
      case 'productName':
        return { width: '15%' }
      default:
        return { width: '8%' }
    }
  }

  // 計算顯示的頁碼範圍
  const getPageNumbers = () => {
    const halfMaxPages = Math.floor(PageSize / 2)
    let startPage = Math.max(1, currentPage - halfMaxPages)
    let endPage = Math.min(totalPages, currentPage + halfMaxPages)

    // 調整範圍以始終顯示 5 頁
    if (endPage - startPage + 1 < PageSize) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + PageSize - 1)
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - PageSize + 1)
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>渠道2產品列表</strong>
          </CCardHeader>
          <CCardBody>
            <CTable className="table-hover fs-6">
              <CTableHead color="light">
                <CTableRow>
                  {displayOrder
                    .filter((key) => !excludedKeys.includes(key)) // 排除欄位
                    .map((key) => (
                      <CTableHeaderCell
                        scope="col"
                        className="text-nowrap"
                        style={getCellStyle(key)}
                        key={key}
                      >
                        {key}
                      </CTableHeaderCell>
                    ))}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((row, index) => (
                  <CTableRow key={index}>
                    {displayOrder
                      .filter(([key]) => !excludedKeys.includes(key)) // 排除欄位
                      .map((key) => (
                        <CTableDataCell key={key} style={getCellStyle(key)}>
                          {row[key]}
                        </CTableDataCell>
                      ))}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <CPagination aria-label="Page navigation example">
              <CPaginationItem aria-label="Previous" onClick={handlePreviousPage}>
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              {getPageNumbers().map((page) => (
                <CPaginationItem
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={page === currentPage ? 'active' : ''}
                >
                  {page}
                </CPaginationItem>
              ))}
              <CPaginationItem aria-label="Next" onClick={handleNextPage}>
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
            <span>
              {' '}
              第 {currentPage} 頁 / {totalPages} 頁{' '}
            </span>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Channel2
