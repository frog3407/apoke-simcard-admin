import React, { useEffect, useState } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CForm,
  CCard,
  CCardHeader,
  CFormInput,
  CFormFeedback,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import MessageModal from 'src/components/MessageModal'
import { validateRange } from 'src/utils/validator'
import { apiDealerFeedback, apiGetDealerFeedback } from 'src/utils/Api'

const LevelManage = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [errors, setErrors] = useState({
    feedback1: false,
    feedback2: false,
    feedback3: false,
    feedback4: false,
  })
  const [feedback1, setFeedback1] = useState('')
  const [feedback2, setFeedback2] = useState('')
  const [feedback3, setFeedback3] = useState('')
  const [feedback4, setFeedback4] = useState('')
  // 呼叫 API 取得初始值
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await apiGetDealerFeedback()
        if (result.code === '0000') {
          const { feedbackInfo } = result.result
          console.log('feedbackInfo=' + feedbackInfo)
          feedbackInfo.forEach((item) => {
            if (item.feedbackName == '10萬') {
              setFeedback1(item.feedbackValue || 0)
            } else if (item.feedbackName == '20萬') {
              setFeedback2(item.feedbackValue || 0)
            } else if (item.feedbackName == '30萬') {
              setFeedback3(item.feedbackValue || 0)
            } else if (item.feedbackName == '50萬') {
              setFeedback4(item.feedbackValue || 0)
            }
          })
        } else {
          console.error('API 回傳錯誤:', result.message)
        }
      } catch (error) {
        console.error('API 呼叫失敗:', error)
      }
    }
    fetchInitialData()
  })

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    const feedback1 = form.elements.feedback1.value
    const feedback2 = form.elements.feedback2.value
    const feedback3 = form.elements.feedback3.value
    const feedback4 = form.elements.feedback4.value
    let isValid = true
    let newErrors = { ...errors }
    if (!validateRange(feedback1)) {
      newErrors.feedback1 = true
      isValid = false
    } else {
      newErrors.feedback1 = false
    }
    if (!validateRange(feedback2)) {
      newErrors.feedback2 = true
      isValid = false
    } else {
      newErrors.feedback2 = false
    }
    if (!validateRange(feedback3)) {
      newErrors.feedback3 = true
      isValid = false
    } else {
      newErrors.feedback3 = false
    }
    if (!validateRange(feedback4)) {
      newErrors.feedback4 = true
      isValid = false
    } else {
      newErrors.feedback4 = false
    }
    setErrors(newErrors)
    if (!isValid) {
      return
    }
    //呼叫API
    const result = await apiDealerFeedback({
      feedback1: feedback1,
      feedback2: feedback2,
      feedback3: feedback3,
      feedback4: feedback4,
    })
    if (result.code === '0000') {
      //修改密碼成功
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '儲存成功',
        time: 0,
        navurl: '',
        closebtn: true,
        timestamp: Date.now(),
      })
    } else {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '儲存失敗，錯誤訊息:' + result.message,
        time: 0,
        navurl: '',
        closebtn: true,
        timestamp: Date.now(), // 添加唯一標識符
      })
    }
  }

  return (
    <CRow>
      <MessageModal modalObj={modalObj}></MessageModal>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商金額回饋設定</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3 mx-5">
              <CCol sm={12}>
                <small className="text-muted">請輸入回饋的%數</small>
              </CCol>
            </CRow>
            <CForm className="row mx-5 g-3 needs-validation" noValidate onSubmit={handleSubmit}>
              <CTable bordered>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" className="text-end">
                      每次儲值金額
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">回饋%數</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      10萬
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="feedback1"
                            defaultValue={feedback1}
                            className={errors.feedback1 ? 'is-invalid' : ''}
                          />
                          {errors.feedback1 && (
                            <CFormFeedback invalid>請輸入正確的10萬回饋%數</CFormFeedback>
                          )}
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      20萬
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="feedback2"
                            defaultValue={feedback2}
                            className={errors.feedback2 ? 'is-invalid' : ''}
                          />
                          {errors.feedback2 && (
                            <CFormFeedback invalid>請輸入正確的20萬回饋%數</CFormFeedback>
                          )}
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      30萬
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="feedback3"
                            defaultValue={feedback3}
                            className={errors.feedback3 ? 'is-invalid' : ''}
                          />
                          {errors.feedback3 && (
                            <CFormFeedback invalid>請輸入正確的30萬回饋%數</CFormFeedback>
                          )}
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      50萬
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="feedback4"
                            defaultValue={feedback4}
                            className={errors.feedback4 ? 'is-invalid' : ''}
                          />
                          {errors.feedback4 && (
                            <CFormFeedback invalid>請輸入正確的50萬回饋%數</CFormFeedback>
                          )}
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CCol xs={12} className="mb-5">
                <CButton color="primary" type="submit" className="float-end">
                  儲存
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default LevelManage
