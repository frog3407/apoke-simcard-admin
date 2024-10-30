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
import * as XLSX from 'xlsx'

const Channel1 = () => {
  const [fullData, setFullData] = useState([])
  const [displayData, setDisplayData] = useState([]) // 當前頁顯示的資料
  const [currentPage, setCurrentPage] = useState(1) // 當前頁碼
  const [itemsPerPage] = useState(5) // 每頁顯示的資料數量

  useEffect(() => {
    fetch('/joytel-products.xlsx')
      .then((response) => response.arrayBuffer()) // 將檔案讀取為 ArrayBuffer
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: 'array' })
        const sheetName = workbook.SheetNames[0] // 讀取第一個工作表
        const worksheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(worksheet) // 轉換為 JSON 格式
        console.log('jsonData=' + JSON.stringify(jsonData))
        setFullData(jsonData) // 加載所有資料
        setDisplayData(jsonData.slice(0, itemsPerPage)) // 設定第一頁的顯示資料
      })
      .catch((error) => console.error('Error reading Excel file:', error))
  }, [])

  // 切換頁面時更新顯示資料
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    setDisplayData(fullData.slice(start, end))
  }, [currentPage, itemsPerPage, fullData])

  const displayOrder = [
    '商品名称',
    '单价(元)',
    '使用地',
    '商品类型',
    '商品描述',
    '最晚使用日期',
    '商品动态',
    '备注',
    '激活方式',
  ]
  const excludedKeys = ['商品编码']
  const getCellStyle = (key) => {
    switch (key) {
      case '单价(元)':
        return { width: '5%' }
      case '商品类型':
        return { width: '5%' }
      case '商品名称':
        return { width: '15%' }
      case '使用地':
        return { width: '15%' }
      default:
        return { width: '8%' }
    }
  }

  // 計算當前頁面顯示的資料
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // 計算總頁數
  const totalPages = Math.ceil(fullData.length / itemsPerPage)
  // 計算顯示的頁碼範圍
  const getPageNumbers = () => {
    const maxPages = 10
    const halfMaxPages = Math.floor(maxPages / 2)
    let startPage = Math.max(1, currentPage - halfMaxPages)
    let endPage = Math.min(totalPages, currentPage + halfMaxPages)

    // 調整範圍以始終顯示 5 頁
    if (endPage - startPage + 1 < maxPages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxPages - 1)
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPages + 1)
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>渠道1產品列表</strong>
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
                {displayData.map((row, index) => (
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
              <CPaginationItem
                aria-label="Previous"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
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
              <CPaginationItem
                aria-label="Next"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
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
export default Channel1
