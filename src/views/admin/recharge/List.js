import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CFormSelect,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CFormFeedback,
} from '@coreui/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { apiGetDealerNames, apiAddRecharge } from '../../../utils/Api'
import { validatePositiveInteger } from '../../../utils/validator'
import MessageModal from 'src/components/MessageModal'

const List = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [addRechargeVisible, setAddRechargeVisible] = useState(false)
  const [errors, setErrors] = useState({
    rechargrAmount: false,
    rechargeTime: false,
    dealerId: false,
  })
  const [errorMessage, setErrorMessage] = useState('') //錯誤訊息
  const [rechargeTime, setRechargeTime] = useState(null) // 儲值時間的狀態
  const [selectDealerNames, setSelectDealerNames] = useState([]) // 經銷商名稱的狀態
  const [dealerId, setDealerId] = useState(99) // 經銷商 ID 的狀態
  const [rechargesList, setRechargesList] = useState([]) // 儲值紀錄的狀態
  const [loading, setLoading] = useState(false) // 加載狀態
  useEffect(() => {
    const fetchDealerNames = async () => {
      //setLoading(true) // 開始加載
      try {
        const result = await apiGetDealerNames()
        console.log('result:', result)
        if (result.code === '0000') {
          setSelectDealerNames(result.result)
        } else {
          console.log('result.result:', result.result)
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        //setLoading(false) // 加載完成
      }
    }
    fetchDealerNames()
  }, [])

  useEffect(() => {
    const fetchRecharges = async () => {
      setLoading(true) // 開始加載
      try {
        const response = await apiGetRecharges()
        setRechargesList(response.result)
      } catch (error) {
        console.error('Failed to fetch recharges:', error)
      } finally {
        setLoading(false) // 加載完成
      }
    }
    fetchRecharges()
  }, [])

  const handleAddRecharge = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    let isValid = true
    let newErrors = { ...errors }
    const rechargeAmount = form.elements.inputRechargeAmount.value
    const rechargeTime = form.elements.inputRechargeTime.value
    const rechargeNote = form.elements.inputRechargeNote.value
    if (!rechargeAmount) {
      newErrors.rechargrAmount = true
      isValid = false
    } else {
      newErrors.rechargrAmount = false
    }
    if (!validatePositiveInteger(rechargeTime)) {
      newErrors.rechargeTime = true
      isValid = false
    } else {
      newErrors.rechargeTime = false
    }
    if (dealerId === 99) {
      newErrors.dealerId = true
      isValid = false
    } else {
      newErrors.dealerId = false
    }
    setErrors(newErrors)
    if (!isValid) {
      return
    }
    console.log('rechargeAmount:', rechargeAmount)
    console.log('rechargeTime:', rechargeTime)

    // 呼叫 API 新增儲值紀錄
    const result = await apiAddRecharge({
      dealerid: dealerId,
      amount: rechargeAmount,
      remark: rechargeNote,
      rechargetime: rechargeTime,
    })
    if (result.code === '0000') {
      setModalObj({
        alert: 'alert',
        type: 'reload',
        title: '訊息通知',
        msg: '新增成功',
        time: 2500,
        navurl: '',
        closebtn: false,
        timestamp: Date.now(),
      })
      setAddRechargeVisible(false)
      form.reset()
    } else {
      setErrorMessage('新增失敗：' + result.message)
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <MessageModal modalObj={modalObj}></MessageModal>
            <CRow className="text-end mb-3">
              <CCol>
                <CButton
                  color="info"
                  size="sm"
                  variant="outline"
                  className="me-2"
                  onClick={() => setAddRechargeVisible(!addRechargeVisible)}
                >
                  新增儲值
                </CButton>
                <CModal
                  alignment="center"
                  visible={addRechargeVisible}
                  onClose={() => setAddRechargeVisible(false)}
                  aria-labelledby="VerticallyCenteredExample"
                >
                  <CForm noValidate onSubmit={handleAddRecharge}>
                    <CModalHeader>
                      <CModalTitle id="RechargeTitle">新增儲值紀錄</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CRow className="my-3">
                        <CFormLabel htmlFor="category" className="col-sm-3 col-form-label">
                          經銷商
                        </CFormLabel>
                        <CCol sm={7}>
                          <CFormSelect
                            value={dealerId}
                            id="inputDealer"
                            onChange={(e) => setDealerId(e.target.value)}
                            className={errors.dealerId ? 'is-invalid' : ''}
                          >
                            <option value="99">請選擇儲值的經銷商</option>
                            {selectDealerNames.map((row, index) => (
                              <option key={index} value={row['id']}>
                                {row['name']}
                              </option>
                            ))}
                          </CFormSelect>
                          {errors.dealerId && (
                            <CFormFeedback invalid>請選擇儲值的經銷商</CFormFeedback>
                          )}
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel
                          htmlFor="inputRechargeAmount"
                          className="col-sm-3 col-form-label"
                        >
                          儲值金額
                        </CFormLabel>
                        <CCol sm={7}>
                          <CFormInput
                            type="text"
                            id="inputRechargeAmount"
                            className={errors.rechargrAmount ? 'is-invalid' : ''}
                          />
                          {errors.rechargrAmount && (
                            <CFormFeedback invalid>請輸入儲值金額</CFormFeedback>
                          )}
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputRechargeTime" className="col-sm-3 col-form-label">
                          儲值時間
                        </CFormLabel>
                        <CCol sm={7}>
                          <ReactDatePicker
                            id="inputRechargeTime"
                            selected={rechargeTime}
                            onChange={(date) => setRechargeTime(date)}
                            timeInputLabel="Time:"
                            showTimeInput
                            dateFormat="yyyy-MM-dd HH:mm:ss"
                            className={`form-control ${errors.rechargeTime ? 'is-invalid' : ''}`}
                            placeholderText="請選擇儲值時間"
                          />
                          {errors.rechargeTime && (
                            <CFormFeedback invalid>密碼格式不符合規則</CFormFeedback>
                          )}
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputRechargeNote" className="col-sm-3 col-form-label">
                          備註
                        </CFormLabel>
                        <CCol sm={7}>
                          <CFormInput type="text" id="inputRechargeNote" />
                        </CCol>
                      </CRow>
                    </CModalBody>
                    <CModalFooter>
                      {errorMessage && <span className="text-danger">{errorMessage}</span>}
                      <CButton color="secondary" onClick={() => setAddRechargeVisible(false)}>
                        取消
                      </CButton>
                      <CButton color="primary" type="submit">
                        新增
                      </CButton>
                    </CModalFooter>
                  </CForm>
                </CModal>
              </CCol>
            </CRow>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">交易號碼</CTableHeaderCell>
                  <CTableHeaderCell scope="col">經銷商</CTableHeaderCell>
                  <CTableHeaderCell scope="col">儲值金額</CTableHeaderCell>
                  <CTableHeaderCell scope="col">帳戶餘額</CTableHeaderCell>
                  <CTableHeaderCell scope="col">交易時間</CTableHeaderCell>
                  <CTableHeaderCell scope="col">操作人員</CTableHeaderCell>
                  <CTableHeaderCell scope="col">備註</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {rechargesList.map((record) => (
                  <CTableRow key={record.transactionNo}>
                    <CTableDataCell>{record.transactionNo}</CTableDataCell>
                    <CTableDataCell>{record.dealerName}</CTableDataCell>
                    <CTableDataCell>{record.amount}</CTableDataCell>
                    <CTableDataCell>{record.balance}</CTableDataCell>
                    <CTableDataCell>{record.rechargeTime}</CTableDataCell>
                    <CTableDataCell>{record.operatorName}</CTableDataCell>
                    <CTableDataCell>{record.remark}</CTableDataCell>
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
