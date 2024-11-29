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
  CFormInput,
  CButton,
} from '@coreui/react'
import * as XLSX from 'xlsx'
import PropTypes from 'prop-types'
import { apiGetChannel2Products } from '../utils/Api'

const pageSize = 10 // 每次請求的資料數量
/*
ChannelProducts組件參數說明：
channelName:指定的渠道
isSelect:是否需要顯示checkbox (代表是建立訂單的頁面)
onSelectedItem:回傳給父元件選擇的商品
cartItems:父元件確定加入購物車的商品，要依據這個將checkbox變成已勾選
*/
const ChannelProducts = (props) => {
  const { channelName, isSelect = false, onSelectedItem = {}, cartItems } = props
  const [checkeBoxValue, setCheckeBoxValue] = useState({}) //checkbox勾選的狀態資料
  const [allselectedItems, setAllselectedItems] = useState([]) //已勾選的商品
  const [fullData, setFullData] = useState([]) //所有資料
  const [filteredData, setFilteredData] = useState([]) // 過濾後的資料
  const [searchQuery, setSearchQuery] = useState('') // 搜尋條件
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
          emailList: item.emailList,
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

  // 分頁邏輯-切換頁面時更新顯示資料
  const paginateData = () => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredData.slice(start, end)
  }

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

          const updatedData = jsonData.map((row) => ({
            ...row, // 保留其他欄位不變
            商品名称: row.商品名称.replace('-JOY-', ''), // 直接使用 replace 進行替換
          }))
          // const updatedData = jsonData.map((row) => {
          //   // 遍歷每個欄位並進行簡繁體轉換
          //   const convertedRow = Object.keys(row).reduce((acc, key) => {
          //     acc[key] = row[key].replace('JOY', '') // 對每個欄位進行轉換
          //     return acc
          //   }, {})

          //   return convertedRow
          // })

          setFullData(updatedData) // 加載所有資料
          setFilteredData(updatedData) // 初始過濾資料為全量
          setTotalPages(Math.ceil(updatedData.length / pageSize)) //總頁數
          setIsLoading(false)
          setHasMore(false)
        })
        .catch((error) => console.error('Error reading Excel file:', error))
    } else if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL2) {
      try {
        //透過API取得產品資料
        let sendData = { page: page, producttype: 'DAILY' }
        const result = await apiGetChannel2Products(sendData)

        console.log('result=' + JSON.stringify(result))
        if (page == 1) {
          // 根據返回的資料更新總頁數
          setTotalPages(Math.ceil(result.result.total / pageSize))
        }
        console.log('totalPages=' + totalPages)
        console.log('page=' + page)
        if (result.result.data.length > 0) {
          setFullData((prevData) => [...prevData, ...result.result.data]) // 追加新資料
          setFilteredData((prevData) => [...prevData, ...result.result.data]) // 追加新資料
          let loadPage = page + 1
          console.log('loadPage=' + loadPage)

          //註解fetchData 暫時先取一次就好
          //fetchData(loadPage)
          setHasMore(false) //需拿掉 暫時先取一次就好
          setIsLoading(false) //需拿掉 暫時先取一次就好
        } else {
          setHasMore(false)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        console.error('Error fetching data:', error)
      }
    }
  }
  //要顯示的欄位
  const displayOrder =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1 && !isSelect
      ? [
          '商品名称',
          '单价(元)',
          '商品编码',
          '商品动态',
          '使用地',
          '商品类型',
          '商品描述',
          '最晚使用日期',
          '备注',
          '激活方式',
        ]
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL1 && isSelect
        ? ['商品名称', '单价(元)', '使用地', '商品描述', '最晚使用日期', '备注', '激活方式']
        : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2 && !isSelect
          ? [
              'productName',
              'settlementPrice',
              'productCode',
              'ruleDesc',
              'mcc',
              'operatorDesc',
              'apnDesc',
              'activeType',
              'productType',
              'periodType',
              'days',
              'validityPeriod',
              'dataLimited',
              'dataTotal',
              'dataUnit',
              'lastModifiedTime',
              'isContract',
              'minOrderCycle',
            ]
          : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2 && isSelect
            ? [
                'productName',
                'settlementPrice',
                'mcc',
                'ruleDesc',
                'validityPeriod',
                'activeType',
                'days',
                'apnDesc',
              ]
            : ['Null']
  //排除的欄位
  const excludedKeys =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1 && isSelect
      ? ['商品编码', '商品动态', '商品类型']
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2 && isSelect
        ? [
            'productCode',
            'operatorDesc',
            'productType',
            'periodType',
            'dataLimited',
            'dataTotal',
            'dataUnit',
            'lastModifiedTime',
            'isContract',
            'minOrderCycle',
          ]
        : []
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
  //對應顯示的標題
  const keyMapping =
    channelName === import.meta.env.VITE_PRODUCT_CHANNEL1
      ? {
          商品名称: '商品名稱',
          '单价(元)': '單價(元)',
          商品编码: '商品編碼',
          商品动态: '商品動態',
          使用地: '使用地區',
          商品类型: '商品類型',
          商品描述: '商品方案說明',
          最晚使用日期: '未開通有效期限',
          备注: '備註',
          激活方式: '開通方式',
        }
      : channelName === import.meta.env.VITE_PRODUCT_CHANNEL2
        ? {
            productName: '商品名稱',
            settlementPrice: '單價(元)',
            productCode: '商品編碼',
            ruleDesc: '商品方案說明',
            mcc: '使用地區',
            operatorDesc: '電信商',
            apnDesc: 'APN',
            activeType: '開通方式',
            productType: '商品類型',
            periodType: '商品計量單位',
            days: '開通後使用期限',
            validityPeriod: '未開通有效期限(天)',
            dataLimited: '流量上限',
            dataTotal: '流量總量',
            dataUnit: '流量單位',
            lastModifiedTime: '最後修改時間',
            isContract: '合約產品',
            minOrderCycle: '最小下單數量',
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
        emailList: [''],
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

  // 搜尋邏輯
  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setFilteredData(fullData) // 如果搜尋條件為空，顯示所有資料
      setTotalPages(Math.ceil(fullData.length / pageSize)) //總頁數
    } else {
      const lowerCaseQuery = query.toLowerCase()
      let filtered = []
      if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL1) {
        filtered = fullData.filter(
          (item) =>
            item.商品名称.toLowerCase().includes(lowerCaseQuery) ||
            item.使用地.toLowerCase().includes(lowerCaseQuery) ||
            item.商品描述.toLowerCase().includes(lowerCaseQuery),
        )
      } else if (channelName === import.meta.env.VITE_PRODUCT_CHANNEL2) {
        filtered = fullData.filter(
          (item) =>
            item.productName.toLowerCase().includes(lowerCaseQuery) ||
            item.mcc.toLowerCase().includes(lowerCaseQuery) ||
            item.ruleDesc.toLowerCase().includes(lowerCaseQuery),
        )
      }

      console.log('filtered=' + JSON.stringify(filtered))
      setFilteredData(filtered)
      setTotalPages(Math.ceil(filtered.length / pageSize)) //總頁數
      console.log('setTotalPages=' + Math.ceil(filtered.length / pageSize))
    }

    setCurrentPage(1) // 重置到第一頁
  }
  return (
    <CCol className="overflow-auto">
      <CCol md={6} className="mb-3">
        <CFormInput
          type="text"
          value={searchQuery}
          placeholder="輸入商品名稱、使用地區、商品方案說明來進行搜尋"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </CCol>

      {isLoading ? (
        <CSpinner className="m-2" color="secondary" />
      ) : (
        <CTable className="table-hover fs-6">
          <CTableHead color="secondary">
            <CTableRow>
              {isSelect ? (
                <CTableHeaderCell
                  scope="col"
                  // className="text-nowrap"
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
            {paginateData().map((row, index) => (
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
