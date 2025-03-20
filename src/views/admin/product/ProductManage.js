import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormFeedback,
  CButton,
} from '@coreui/react'
import MessageModal from 'src/components/MessageModal'
import { validateNumber } from '../../../utils/validator'
import { apiDealerPrice, apiGetDealerPrice } from '../../../utils/Api'

const ProductManage = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [addition, setAddition] = useState('') // 售出價格
  const [supplier1, setSupplier1] = useState('') // 渠道1
  const [supplier2, setSupplier2] = useState('') // 渠道2
  const [supplier3, setSupplier3] = useState('') // 渠道3
  const [supplier1Currency, setSupplier1Currency] = useState('') // 渠道1
  const [supplier2Currency, setSupplier2Currency] = useState('') // 渠道2
  const [supplier3Currency, setSupplier3Currency] = useState('') // 渠道3
  const [errorsAddition, setErrorsAddition] = useState(false)
  const [errorsSupplier1, setErrorsSupplier1] = useState(false)
  const [errorsSupplier2, setErrorsSupplier2] = useState(false)
  const [errorsSupplier3, setErrorsSupplier3] = useState(false)

  // 呼叫 API 取得初始值
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await apiGetDealerPrice()
        if (result.code === '0000') {
          const { addition, rateInfo } = result.result
          setAddition(addition || '')
          // 設定各渠道的匯率
          rateInfo.forEach((item) => {
            // console.log('item.supplier=' + item.supplier)
            console.log('item.exchangerate=' + item.exchangerate)
            if (item.supplier == 'joytel') {
              setSupplier1(item.exchangerate || '')
              setSupplier1Currency(item.currency || '')
            } else if (item.supplier == 'Tgt') {
              setSupplier2(item.exchangerate || '')
              setSupplier2Currency(item.currency || '')
            } else if (item.supplier == 'Billion') {
              setSupplier3(item.exchangerate || '')
              setSupplier3Currency(item.currency || '')
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
  }, [])
  const handleSetAddition = (event) => {
    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    const addition = form.elements.addition.value
    if (!validateNumber(addition)) {
      //售出價格數值不符合規範
      setErrorsAddition(true)
    } else {
      setErrorsAddition(false)
      //呼叫API
      fetchDealerPrice({ type: 0, value: addition })
    }
  }
  const handleSupplier1 = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()

    const supplier1 = form.elements.supplier1.value
    if (!validateNumber(supplier1)) {
      setErrorsSupplier1(true)
    } else {
      setErrorsSupplier1(false)
      //呼叫API
      fetchDealerPrice({ type: 1, value: supplier1 })
    }
  }
  const handleSupplier2 = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    const supplier2 = form.elements.supplier2.value
    if (!validateNumber(supplier2)) {
      setErrorsSupplier2(true)
    } else {
      setErrorsSupplier2(false)
      //呼叫API
      fetchDealerPrice({ type: 2, value: supplier2 })
    }
  }
  const handleSupplier3 = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    const supplier2 = form.elements.supplier3.value
    if (!validateNumber(supplier3)) {
      setErrorsSupplier3(true)
    } else {
      setErrorsSupplier3(false)
      //呼叫API
      fetchDealerPrice({ type: 3, value: supplier3 })
    }
  }

  const fetchDealerPrice = async (sendData) => {
    const result = await apiDealerPrice(sendData)
    try {
      if (result.code === '0000') {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '儲存成功',
          time: 2500,
          navurl: '',
          timestamp: Date.now(), // 添加唯一標識符
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
    } catch (error) {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '儲存失敗，錯誤訊息:' + error,
        time: 0,
        navurl: '',
        closebtn: true,
        timestamp: Date.now(), // 添加唯一標識符
      })
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷價設定</strong>
          </CCardHeader>
          <CCardBody>
            <MessageModal modalObj={modalObj}></MessageModal>
            <CRow className="mb-3">
              <CCol sm={12}>
                <small className="text-muted">
                  成本幣值比值：例如：成本是人民幣，經銷價是新台幣，人民幣兌台幣是1:4.5，則應輸入4.5。
                </small>
              </CCol>
            </CRow>
            <CForm noValidate onSubmit={handleSetAddition}>
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  售出價格
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="addition" className="col-sm-2 col-form-label">
                  成本價X數值=經銷商看到的售價
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="addition"
                    defaultValue={addition}
                    className={errorsAddition ? 'is-invalid' : ''}
                  />
                  {errorsAddition && (
                    <CFormFeedback invalid>
                      請輸入數值，範圍大於0且不超過100，允許小數點後1位
                    </CFormFeedback>
                  )}
                </CCol>
                <CCol xs={2}>
                  <CButton color="primary" type="submit">
                    儲存
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
            <CForm noValidate onSubmit={handleSupplier1}>
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  渠道1-Joytel 經銷價設定
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="supplier1" className="col-sm-2 col-form-label">
                  成本幣值比值({supplier1Currency})
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="supplier1"
                    defaultValue={supplier1}
                    className={errorsSupplier1 ? 'is-invalid' : ''}
                  />
                  {errorsSupplier1 && (
                    <CFormFeedback invalid>
                      請輸入成本幣值比值，範圍大於0且不超過100，允許小數點後1位
                    </CFormFeedback>
                  )}
                </CCol>
                <CCol xs={2}>
                  <CButton color="primary" type="submit">
                    儲存
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
            <CForm noValidate onSubmit={handleSupplier2}>
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  渠道2-Tgt 經銷價設定
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="supplier2" className="col-sm-2 col-form-label">
                  成本幣值比值({supplier2Currency})
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="supplier2"
                    defaultValue={supplier2}
                    className={errorsSupplier2 ? 'is-invalid' : ''}
                  />
                  {errorsSupplier2 && (
                    <CFormFeedback invalid>
                      請輸入成本幣值比值，範圍大於0且不超過100，允許小數點後1位
                    </CFormFeedback>
                  )}
                </CCol>
                <CCol xs={2}>
                  <CButton color="primary" type="submit">
                    儲存
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
            <CForm noValidate onSubmit={handleSupplier3}>
              <CRow className="mb-3">
                <CCol sm={12} className="fw-bold text-primary">
                  渠道3-億點 經銷價設定
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="supplier3" className="col-sm-2 col-form-label">
                  成本幣值比值({supplier3Currency})
                </CFormLabel>
                <CCol sm={4}>
                  <CFormInput
                    type="number"
                    id="supplier3"
                    defaultValue={supplier3}
                    className={errorsSupplier3 ? 'is-invalid' : ''}
                  />
                  {errorsSupplier3 && (
                    <CFormFeedback invalid>
                      請輸入成本幣值比值，範圍大於0且不超過100，允許小數點後1位
                    </CFormFeedback>
                  )}
                </CCol>
                <CCol xs={2}>
                  <CButton color="primary" type="submit">
                    儲存
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default ProductManage
