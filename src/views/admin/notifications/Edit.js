import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  CFormTextarea,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
const Edit = () => {
  const { id } = useParams() // 取得路徑中的動態 ID
  const [notificationsType, setNotificationsType] = useState('add') // 新增(add)或編輯(edit)
  const [showTitle, setShowTitle] = useState('新增') // 新增(add)或編輯(edit)
  const [validated, setValidated] = useState(false)
  useEffect(() => {
    const checkType = parseInt(id, 10) || 0
    if (checkType == 0) {
      setNotificationsType('add')
      setShowTitle('新增')
    } else {
      setNotificationsType('edit')
      setShowTitle('編輯')
    }
  }, [])
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
    }
    setValidated(true)
  }
  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{showTitle}公告</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CRow className="my-3">
                <CFormLabel htmlFor="validationTitle" className="col-sm-1 col-form-label">
                  標題
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="validationTitle" defaultValue="" required />
                  <CFormFeedback invalid>請輸入標題</CFormFeedback>
                </CCol>
              </CRow>

              <CRow>
                <CCol md={12}>
                  <CFormTextarea label="公告內容" rows={10}>
                    JOYTEL卡充值注意事项： ①
                    充值套餐有效期请查看商品报价（基础数据管理-商品管理-商品报价） ②
                    卓一发货系统只能自动充值天数，如需重置流量请联系人工客服。 ③
                    已激活的充值套餐不支持取消，未激活的套餐如需取消的需收取2元的手续费。 ④
                    单次充值不要超过30天，单张卡超过30天的可以分多次充值，不限充值次数（比如要充值40天套餐，分两次下单，先充值30天，再充值10天）
                    ⑤ 如果是X天XGB这种总量套餐，天数填写1即可。（比如日本30天3GB，天数那边填1即可）
                    ①批量充值模板里，充值商品名称【商品报价】里面复制，切勿手打，因为有些名称为了视觉统一，加了空格。
                  </CFormTextarea>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Edit
