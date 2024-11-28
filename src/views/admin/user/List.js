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
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilMoney } from '@coreui/icons'

const List = () => {
  const [userList, setUserList] = useState([
    {
      id: 1,
      status: 0,
      company: 'A公司',
      taxid: '12345678',
      leader: '王小明',
      contact: '王小明',
      address: '高雄市鼓山二路1000號',
      contactnumber: '02-2222222',
      phonenumber: '0912345677',
      level: '銀光',
      createtime: '2024/11/08',
    },
    {
      id: 2,
      status: 1,
      company: 'B公司',
      taxid: '23454345',
      leader: '林小美',
      contact: '林小美',
      address: '台北市',
      contactnumber: '02-2222222',
      level: '金燦',
      createtime: '2024/10/08',
    },
  ])
  const dealerLevelList = [
    {
      id: 1,
      name: '銀光',
    },
    {
      id: 2,
      name: '金燦',
    },
    {
      id: 3,
      name: '白金',
    },
    {
      id: 4,
      name: '黑鑽',
    },
  ]
  const [visibleCreatetime, setVisibleCreatetime] = useState('')
  // 当前正在编辑的行
  const [editingRowId, setEditingRowId] = useState(null)
  // 编辑中的临时数据
  const [editedRowData, setEditedRowData] = useState({})

  useEffect(() => {}, [])

  const handleEditClick = (row) => {
    console.log('编辑的数据行：', row)
    // 这里可以执行编辑逻辑，比如弹出编辑框
    setEditingRowId(row.id)
    setEditedRowData({ ...row }) // 复制行数据到编辑状态
    setVisibleCreatetime('d-none')
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
  const handleSaveClick = () => {
    const updatedData = userList.map((row) =>
      row.id === editingRowId ? { ...editedRowData } : row,
    )
    setUserList(updatedData)
    setEditingRowId(null) // 退出编辑状态
    setVisibleCreatetime('')
  }

  // 取消编辑
  const handleCancelClick = () => {
    setEditingRowId(null) // 退出编辑状态
    setEditedRowData({})
    setVisibleCreatetime('')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商列表</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col" style={{ width: '5%' }}>
                    編號
                    {/* <CIcon icon={cilSwapVertical} /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '11%' }}>
                    經銷商名稱
                    {/* <CIcon icon={cilSwapVertical} /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '7%' }}>
                    分級
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '8%' }}>
                    統一編號
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '7%' }}>
                    負責人
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '7%' }}>
                    連絡人
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '15%' }}>
                    連絡地址
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '9%' }}>
                    連絡電話
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '9%' }}>
                    手機號碼
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    scope="col"
                    style={{ width: '8%' }}
                    className={visibleCreatetime}
                  >
                    建立時間
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '5%' }}>
                    狀態
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ width: '9%' }}>
                    操作
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {userList.map((row) => (
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
                            value={editedRowData.company}
                            onChange={(e) => handleInputChange(e, 'company')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormSelect
                            size="sm"
                            aria-label="請選擇經銷商分級"
                            defaultValue={row['level']}
                            onChange={(e) => handleInputChange(e, 'level')}
                          >
                            {dealerLevelList.map((levelRow) => (
                              <option key={levelRow['id']} value={levelRow['name']}>
                                {levelRow['name']}
                              </option>
                            ))}
                          </CFormSelect>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealertaxid_${row['id']}`}
                            name="editDealertaxid"
                            value={editedRowData.taxid}
                            onChange={(e) => handleInputChange(e, 'taxid')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerleader_${row['id']}`}
                            name="editDealerleader"
                            value={editedRowData.leader}
                            onChange={(e) => handleInputChange(e, 'leader')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerContact_${row['id']}`}
                            name="editDealerContact"
                            value={editedRowData.contact}
                            onChange={(e) => handleInputChange(e, 'contact')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerAddress_${row['id']}`}
                            name="editDealerAddress"
                            value={editedRowData.address}
                            onChange={(e) => handleInputChange(e, 'address')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerContactNumber_${row['id']}`}
                            name="editDealerContactNumber"
                            value={editedRowData.contactnumber}
                            onChange={(e) => handleInputChange(e, 'contactnumber')}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CFormInput
                            size="sm"
                            type="text"
                            id={`editDealerPhoneNumber_${row['id']}`}
                            name="editDealerPhoneNumber"
                            value={editedRowData.phonenumber}
                            onChange={(e) => handleInputChange(e, 'phonenumber')}
                          />
                        </CTableDataCell>
                        <CTableDataCell className={visibleCreatetime}>
                          {row['createtime']}
                        </CTableDataCell>
                        <CTableDataCell>
                          {row['status'] == 0 ? (
                            <CFormSwitch
                              label=""
                              id="formSwitchStatus"
                              value="0"
                              onChange={(e) => handleInputChange(e, 'status')}
                              defaultChecked
                            />
                          ) : (
                            <CFormSwitch
                              label=""
                              id="formSwitchStatus"
                              value="1"
                              onChange={(e) => handleInputChange(e, 'status')}
                            />
                          )}
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
                          <Link to={`/admin/user/detail/${row['id']}`}>{row['company']}</Link>
                        </CTableDataCell>
                        <CTableDataCell>{row['level']}</CTableDataCell>
                        <CTableDataCell>{row['taxid']}</CTableDataCell>
                        <CTableDataCell>{row['leader']}</CTableDataCell>
                        <CTableDataCell>{row['contact']}</CTableDataCell>
                        <CTableDataCell>{row['address']}</CTableDataCell>
                        <CTableDataCell>{row['contactnumber']}</CTableDataCell>
                        <CTableDataCell>{row['phonenumber']}</CTableDataCell>
                        <CTableDataCell className={visibleCreatetime}>
                          {row['createtime']}
                        </CTableDataCell>
                        <CTableDataCell>
                          {row['status'] == 0 ? (
                            <CBadge color="success">啟用</CBadge>
                          ) : (
                            <CBadge color="danger">停用</CBadge>
                          )}
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="info"
                            size="sm"
                            variant="outline"
                            className="me-2"
                            onClick={() => handleEditClick(row)}
                          >
                            <CIcon icon={cilPencil} size="sm" />
                          </CButton>
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
