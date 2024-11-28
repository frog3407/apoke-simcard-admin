import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import MessageModal from 'src/components/MessageModal'

const CustomStyles = () => {
  const navigate = useNavigate()
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [validated, setValidated] = useState(false)
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

  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
      //導到經銷商列表
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '經銷商建立成功',
        time: 1500,
        navurl: '/admin/user/list',
      })
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <MessageModal modalObj={modalObj}></MessageModal>
      <div className="mb-3">
        <CFormLabel htmlFor="validationUserId" className="form-label">
          帳號
        </CFormLabel>
        <CFormInput type="text" id="validationUserId" defaultValue="" required />
        <CFormFeedback invalid>請輸入帳號</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPwd" className="form-label">
          密碼
        </CFormLabel>
        <CFormInput type="password" id="validationPwd" defaultValue="" required />
        <CFormFeedback invalid>請輸入密碼</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPwdConfirm" className="form-label">
          密碼確認
        </CFormLabel>
        <CFormInput type="password" id="validationPwdConfirm" defaultValue="" required />
        <CFormFeedback invalid>請輸入密碼</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPwdConfirm" className="form-label me-2">
          經銷商等級
        </CFormLabel>
        {dealerLevelList.map((row, index) => (
          <CFormCheck
            key={index}
            inline
            type="radio"
            value={row['id']}
            name="dealerLevel"
            label={row['name']}
            required
          />
        ))}

        <CFormFeedback invalid>請選擇經銷商分級</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationDealerName" className="form-label">
          經銷商名稱
        </CFormLabel>
        <CFormInput
          type="text"
          id="validationDealerName"
          name="dealerName"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>請輸入經銷商名稱</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationNumber" className="form-label">
          統一編號
        </CFormLabel>
        <CFormInput type="text" id="validationNumber" name="dealerNumber" defaultValue="" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationOwner" className="form-label">
          負責人
        </CFormLabel>
        <CFormInput type="text" id="validationOwner" name="dealerOwner" defaultValue="" required />
        <CFormFeedback invalid>請輸入負責人</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationContactName" className="form-label">
          連絡人
        </CFormLabel>
        <CFormInput
          type="text"
          id="validationContactName"
          name="dealerContactName"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>請輸入連絡人姓名</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationAddress" className="form-label">
          連絡地址
        </CFormLabel>
        <CFormInput
          type="text"
          id="validationAddress"
          name="dealerAddress"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>請輸入聯繫地址</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationContactNumber" className="form-label">
          連絡電話
        </CFormLabel>
        <CFormInput
          type="text"
          id="validationContactNumber"
          name="dealerContactNumber"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>請輸入連絡電話</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="validationPhoneNumber" className="form-label">
          手機號碼
        </CFormLabel>
        <CFormInput
          type="text"
          id="validationPhoneNumber"
          name="dealerPhoneNumber"
          defaultValue=""
          required
        />
        <CFormFeedback invalid>請輸入連絡電話</CFormFeedback>
      </div>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          建立
        </CButton>
      </CCol>
    </CForm>
  )
}
const Create = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商基本資料</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">建立完成後請提供帳號密碼給經銷商</p>
            {CustomStyles()}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Create