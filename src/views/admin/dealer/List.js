import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  CButton,
  CFormSelect,
  CBadge,
  CFormInput,
  CFormSwitch,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilMoney } from '@coreui/icons'
import { apiGetDealers, apiEditDealer } from 'src/utils/Api'
import MessageModal from 'src/components/MessageModal'
const List = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [dealerList, setDealers] = useState([])
  // 正在編輯的行
  const [editingRowId, setEditingRowId] = useState(null)
  // 編輯中的臨時資料
  const [editedRowData, setEditedRowData] = useState({})

  useEffect(() => {
    const fetchDealers = async () => {
      //setLoading(true) // 開始加載
      try {
        const result = await apiGetDealers()
        console.log('result:', result)
        if (result.code === '0000') {
          setDealers(result.result)
        } else {
          console.log('result.result:', result.result)
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        //setLoading(false) // 加載完成
      }
    }
    fetchDealers()
  }, [])

  const handleEditClick = (row) => {
    console.log('编辑的数据行：', row)
    // 这里可以执行编辑逻辑，比如弹出编辑框
    setEditingRowId(row.id)
    setEditedRowData({ ...row }) // 复制行数据到编辑状态
  }

  // 处理输入框值变化
  const handleInputChange = (e, key) => {
    console.log('handleInputChange key:', key)
    var setValue = ''
    if (key == 'status') {
      setValue = 1
      if (e.target.checked) {
        setValue = 0
      }
    } else {
      setValue = e.target.value
    }
    console.log('handleInputChange value:', setValue)
    console.log('handleInputChange editedRowData:', editedRowData)
    setEditedRowData({ ...editedRowData, [key]: setValue })
  }

  // 保存修改
  const handleSaveClick = async () => {
    const matchedRow = dealerList.find((row) => row.id === editingRowId)
    // 如果找到，合併編輯後的資料
    const updatedRow = matchedRow ? { ...matchedRow, ...editedRowData } : null
    // 如果有更新的資料，更新 dealerList
    const updatedData = dealerList.map((row) => (row.id === editingRowId ? updatedRow : row))
    console.log('matchedRow:', matchedRow)
    console.log('updatedRow:', updatedRow)
    console.log('updatedData:', updatedData)
    //呼叫API
    try {
      const result = await apiEditDealer(updatedRow)
      if (result.code === '0000') {
        setDealers(updatedData)
      } else {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '編輯失敗，錯誤訊息:' + result.message,
          time: 0,
          navurl: '',
          closebtn: true,
          timestamp: Date.now(),
        })
      }
    } catch (error) {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '編輯失敗，錯誤訊息:' + error,
        time: 0,
        navurl: '',
        closebtn: true,
        timestamp: Date.now(),
      })
    } finally {
      setEditingRowId(null) // 退出编辑状态
    }
  }

  // 取消编辑
  const handleCancelClick = () => {
    setEditingRowId(null) // 退出编辑状态
    setEditedRowData({})
  }

  return (
    <CRow>
      <CCol xs={12}>
        <MessageModal modalObj={modalObj}></MessageModal>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商列表</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '4%' }}>
                    編號
                    {/* <CIcon icon={cilSwapVertical} /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '15%' }}>
                    經銷商名稱
                    {/* <CIcon icon={cilSwapVertical} /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    Line ID
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    統一編號
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    負責人
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '10%' }}>
                    聯絡人
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '15%' }}>
                    聯絡地址
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '9%' }}>
                    聯絡電話
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '9%' }}>
                    手機號碼
                  </CTableHeaderCell>

                  <CTableHeaderCell scope="col" style={{ width: '8%' }}>
                    操作
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {dealerList.map((row) => (
                  <CTableRow key={row['id']}>
                    {editingRowId === row.id ? (
                      <>
                        {/* 編輯狀態顯示輸入框 */}
                        <CTableDataCell>{row['id']}</CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerName_${row['id']}`}
                            name="editDealerName"
                            value={editedRowData.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerLineId_${row['id']}`}
                            name="editDealerLineId_"
                            value={editedRowData.lineId}
                            onChange={(e) => handleInputChange(e, 'lineId')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealertaxid_${row['id']}`}
                            name="editDealertaxid"
                            value={editedRowData.number}
                            onChange={(e) => handleInputChange(e, 'number')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerleader_${row['id']}`}
                            name="editDealerleader"
                            value={editedRowData.owner}
                            onChange={(e) => handleInputChange(e, 'owner')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerContact_${row['id']}`}
                            name="editDealerContact"
                            value={editedRowData.contactName}
                            onChange={(e) => handleInputChange(e, 'contactName')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerAddress_${row['id']}`}
                            name="editDealerAddress"
                            value={editedRowData.contactAddr}
                            onChange={(e) => handleInputChange(e, 'contactAddr')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerContactNumber_${row['id']}`}
                            name="editDealerContactNumber"
                            value={editedRowData.contactNumber}
                            onChange={(e) => handleInputChange(e, 'contactNumber')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerPhoneNumber_${row['id']}`}
                            name="editDealerPhoneNumber"
                            value={editedRowData.phoneNumber}
                            onChange={(e) => handleInputChange(e, 'phoneNumber')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="primary"
                            size="sm"
                            className="me-2"
                            onClick={handleSaveClick}
                          >
                            保存
                          </CButton>
                          <CButton color="secondary" size="sm" onClick={handleCancelClick}>
                            取消
                          </CButton>
                        </CTableDataCell>
                      </>
                    ) : (
                      <>
                        {/* 非編輯狀態顯示正常資料 */}
                        <CTableDataCell>{row['id']}</CTableDataCell>
                        <CTableDataCell>
                          {/* <Link to={`/admin/user/detail/${row['id']}`}>{row['name']}</Link> */}
                          {row['name']}
                        </CTableDataCell>
                        <CTableDataCell>{row['lineId']}</CTableDataCell>
                        <CTableDataCell>{row['number']}</CTableDataCell>
                        <CTableDataCell>{row['owner']}</CTableDataCell>
                        <CTableDataCell>{row['contactName']}</CTableDataCell>
                        <CTableDataCell>{row['contactAddr']}</CTableDataCell>
                        <CTableDataCell>{row['contactNumber']}</CTableDataCell>
                        <CTableDataCell>{row['phoneNumber']}</CTableDataCell>
                        <CTableDataCell>
                          <CTooltip content="編輯">
                            <CButton
                              color="info"
                              size="sm"
                              variant="outline"
                              className="me-2"
                              onClick={() => handleEditClick(row)}
                            >
                              <CIcon icon={cilPencil} size="sm" />
                            </CButton>
                          </CTooltip>
                        </CTableDataCell>
                      </>
                    )}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default List
