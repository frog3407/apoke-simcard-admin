import React, { Suspense, useEffect, useState } from 'react'
import {
  CCol,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem,
  CFormCheck,
} from '@coreui/react'
import * as XLSX from 'xlsx'
import PropTypes from 'prop-types'
import { apiGetChannel2Products } from '../utils/Api'
const pageSize = 10 // 每次請求的資料數量
/*
ChannelProducts組件參數說明：
channelName:指定的渠道
isSelect:是否需要顯示checkbox
onSelectedItem:回傳給父元件選擇的商品
cartItems:父元件確定加入購物車的商品，要依據這個將checkbox變成已勾選
*/
const ChannelProducts = (props) => {
  const { channelName, isSelect = false, onSelectedItem = {}, cartItems } = props
  const [checkeBoxValue, setCheckeBoxValue] = useState({}) //checkbox勾選的狀態資料
  const [allselectedItems, setAllselectedItems] = useState([]) //已勾選的商品
  const [fullData, setFullData] = useState([]) //excel讀檔方式才會使用到
  const [displayData, setDisplayData] = useState([]) // 當前頁顯示的資料
  const [currentPage, setCurrentPage] = useState(1) // 當前頁碼
  const [itemsPerPage] = useState(pageSize) // 每頁顯示的資料數量
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true) // 是否有更多資料
  useEffect(() => {
    let initSelectedItemArray = []
    if (isSelect) {
      console.log('cartItems=' + JSON.stringify(cartItems))
      cartItems.forEach((item) => {
        checkeBoxValue[item.itemCode] = true // 將符合條件的項目 ID 設置為 true
        const newItem = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          itemPrice: item.itemPrice,
          itemDate: item.itemDate,
          itemQuantity: item.itemQuantity,
        }
        initSelectedItemArray.push(newItem)
      })
      setAllselectedItems(initSelectedItemArray)
    }
    console.log('hasMore=' + hasMore)
    if (hasMore) {
      fetchData(currentPage)
    }
  }, [currentPage])
  // 切換頁面時更新顯示資料
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    setDisplayData(fullData.slice(start, end))
  }, [currentPage, itemsPerPage, fullData])

  const fetchData = async (page) => {
    setIsLoading(true)
    if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL1) {
      //透過excel檔案的到產品資料
      fetch('./joytel-products-esim.xlsx')
        .then((response) => response.arrayBuffer()) // 將檔案讀取為 ArrayBuffer
        .then((buffer) => {
          const workbook = XLSX.read(buffer, { type: 'array' })
          const sheetName = workbook.SheetNames[0] // 讀取第一個工作表
          const worksheet = workbook.Sheets[sheetName]
          const jsonData = XLSX.utils.sheet_to_json(worksheet) // 轉換為 JSON 格式
          console.log('jsonData=' + JSON.stringify(jsonData))
          setFullData(jsonData) // 加載所有資料
          setDisplayData(jsonData.slice(0, itemsPerPage)) // 設定第一頁的顯示資料
          setTotalPages(Math.ceil(jsonData.length / pageSize)) //總頁數
          setIsLoading(false)
          setHasMore(false)
        })
        .catch((error) => console.error('Error reading Excel file:', error))
    } else if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL2) {
      try {
        //透過API取得產品資料
        let sendData = { page: page, producttype: 'MONTH' }
        const result = await apiGetChannel2Products(sendData)

        console.log('result=' + JSON.stringify(result))
        if (page == 1) {
          // 根據返回的資料更新總頁數
          setTotalPages(Math.ceil(result.result.total / pageSize))
          setDisplayData(result.result.data.slice(0, itemsPerPage)) // 設定第一頁的顯示資料
        }
        console.log('totalPages=' + totalPages)
        console.log('page=' + page)
        if (result.result.data.length > 0) {
          setFullData((prevData) => [...prevData, ...result.result.data]) // 追加新資料
          let loadPage = page + 1
          console.log('loadPage=' + loadPage)
          fetchData(loadPage)
        } else {
          setHasMore(false)
          setIsLoading(false)
        }
        //setDisplayData(result.result.data) // 更新狀態
      } catch (error) {
        setIsLoading(false)
        console.error('Error fetching data:', error)
      }
    }
  }
  const displayOrder =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1
      ? [
          '商品名称',
          '单价(元)',
          '使用地',
          '商品类型',
          '商品描述',
          '最晚使用日期',
          '备注',
          '激活方式',
        ]
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2
        ? ['productName', 'productType', 'ruleDesc', 'activeType', 'settlementPrice']
        : ['Null']
  const excludedKeys =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1
      ? ['商品编码', '商品动态']
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2
        ? [
            'productCode',
            'periodType',
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
        : ['Null']
  const getCellStyle = (key) => {
    if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL1) {
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
    } else if (channelName == import.meta.env.VITE_PRODUCT_CHANNEL2) {
      switch (key) {
        case 'productName':
          return { width: '15%' }
        default:
          return { width: '8%' }
      }
    }
  }
  const keyMapping =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1
      ? {
          商品名称: '商品名稱',
          '单价(元)': '單價',
          商品类型: '類型',
          使用地: '地區',
          商品描述: '描述',
          最晚使用日期: '有效日期',
          备注: '備註',
          激活方式: '激活方式',
        }
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2
        ? {
            productName: '商品名稱',
            settlementPrice: '單價',
            productType: '類型',
            ruleDesc: '描述',
            activeType: '激活方式',
          }
        : {
            Name: 'null',
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
  // 計算顯示的頁碼範圍
  const getPageNumbers = () => {
    const halfMaxPages = Math.floor(pageSize / 2)
    let startPage = Math.max(1, currentPage - halfMaxPages)
    let endPage = Math.min(totalPages, currentPage + halfMaxPages)
    // 調整範圍以始終顯示 5 頁
    if (endPage - startPage + 1 < pageSize) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + pageSize - 1)
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - pageSize + 1)
      }
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  const handleSelectedItem = (event, itemCode, itemName, itemPrice, itemDate) => {
    let getChecked = event.target.checked
    setCheckeBoxValue((prev) => ({
      ...prev,
      [itemCode]: event.target.checked,
    }))
    console.log('handleSelectedItem checkeBoxValue=' + JSON.stringify(checkeBoxValue))
    let newSelectedItemArray = allselectedItems
    if (getChecked) {
      const newItem = {
        itemCode: itemCode,
        itemName: itemName,
        itemPrice: itemPrice,
        itemDate: itemDate,
        itemQuantity: 1,
      }
      newSelectedItemArray.push(newItem)
    } else {
      newSelectedItemArray = newSelectedItemArray.reduce((acc, item) => {
        if (item.itemCode !== itemCode) {
          acc.push(item) // 只有不匹配的項目才加入新陣列
        }
        return acc
      }, [])
    }
    setAllselectedItems(newSelectedItemArray)
    onSelectedItem(newSelectedItemArray)
  }

  return (
    <CCol>
      {isLoading ? (
        <CSpinner className="m-2" color="secondary" />
      ) : (
        <CTable className="table-hover fs-6">
          <CTableHead color="secondary">
            <CTableRow>
              {isSelect ? (
                <CTableHeaderCell
                  scope="col"
                  className="text-nowrap"
                  style={{ width: '2%' }}
                ></CTableHeaderCell>
              ) : (
                ''
              )}
              {displayOrder
                .filter((key) => !excludedKeys.includes(key)) // 排除欄位
                .map((key) => (
                  <CTableHeaderCell
                    scope="col"
                    className="text-nowrap"
                    style={getCellStyle(key)}
                    key={key}
                  >
                    {keyMapping[key]}
                  </CTableHeaderCell>
                ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {displayData.map((row, index) => (
              <CTableRow key={index}>
                {isSelect ? (
                  <CTableDataCell>
                    {(() => {
                      switch (channelName) {
                        case import.meta.env.VITE_PRODUCT_CHANNEL1:
                          return (
                            <CFormCheck
                              value={row['商品编码']}
                              checked={checkeBoxValue[row['商品编码']] || false}
                              onChange={(e) =>
                                handleSelectedItem(
                                  e,
                                  row['商品编码'],
                                  row['商品名称'],
                                  row['单价(元)'],
                                  row['最晚使用日期'],
                                )
                              }
                            />
                          )
                        case import.meta.env.VITE_PRODUCT_CHANNEL2:
                          return (
                            <CFormCheck
                              value={row['productCode']}
                              checked={checkeBoxValue[row['productCode']] || false}
                              onChange={(e) =>
                                handleSelectedItem(
                                  e,
                                  row['productCode'],
                                  row['productName'],
                                  row['settlementPrice'],
                                  row['validityPeriod'],
                                )
                              }
                            />
                          )
                        default:
                          return null
                      }
                    })()}
                  </CTableDataCell>
                ) : (
                  ''
                )}

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
      )}
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
    </CCol>
  )
}

ChannelProducts.propTypes = {
  channelName: PropTypes.string,
  isSelect: PropTypes.bool,
  onSelectedItem: PropTypes.func,
  cartItems: PropTypes.array,
}
export default ChannelProducts
