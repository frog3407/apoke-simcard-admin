import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import MessageModal from 'src/components/MessageModal'

const AdminForm = () => {
  return (
    <CCol xs={12}>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationName" className="col-sm-1 col-form-label">
          使用者名稱
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput type="text" id="validationName" name="dealerName" defaultValue="" required />
          <CFormFeedback invalid>請輸入使用者名稱</CFormFeedback>
        </CCol>
      </CRow>

      <CRow className="mb-3">
        <CFormLabel htmlFor="validationContactNumber" className="col-sm-1 col-form-label">
          聯絡電話
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationContactNumber"
            name="dealerContactNumber"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationPhoneNumber" className="col-sm-1 col-form-label">
          手機號碼
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationPhoneNumber"
            name="dealerPhoneNumber"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入手機號碼</CFormFeedback>
        </CCol>
      </CRow>
    </CCol>
  )
}
const DealerForm = () => {
  return (
    <CCol xs={12}>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationDealerName" className="col-sm-1 col-form-label">
          經銷商名稱
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationDealerName"
            name="dealerName"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入經銷商名稱</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationNumber" className="col-sm-1 col-form-label">
          統一編號
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput type="text" id="validationNumber" name="dealerNumber" defaultValue="" />
          <CFormFeedback invalid>請輸入正確的統一編號</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationOwner" className="col-sm-1 col-form-label">
          負責人
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationOwner"
            name="dealerOwner"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入負責人</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationContactName" className="col-sm-1 col-form-label">
          聯絡人
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationContactName"
            name="dealerContactName"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入聯絡人姓名</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationAddress" className="col-sm-1 col-form-label">
          聯絡地址
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationAddress"
            name="dealerAddress"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入聯絡地址</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationContactNumber" className="col-sm-1 col-form-label">
          聯絡電話
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationContactNumber"
            name="dealerContactNumber"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationPhoneNumber" className="col-sm-1 col-form-label">
          手機號碼
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput
            type="text"
            id="validationPhoneNumber"
            name="dealerPhoneNumber"
            defaultValue=""
            required
          />
          <CFormFeedback invalid>請輸入手機號碼</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel htmlFor="validationNote" className="col-sm-1 col-form-label">
          備註
        </CFormLabel>
        <CCol sm={6}>
          <CFormInput type="text" id="validationNote" name="dealerNote" defaultValue="" required />
          <CFormFeedback invalid>請輸入備註</CFormFeedback>
        </CCol>
      </CRow>
    </CCol>
  )
}

const Create = () => {
  const navigate = useNavigate()
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [validated, setValidated] = useState(false)
  const [selectRoleId, setSelectRoleId] = useState(0)
  const [selectRoleName, setSelectRoleName] = useState('[請選擇角色]')
  const [selectRoleDesc, setSelectRoleDesc] = useState('[請選擇角色]')

  const roleList = [
    {
      id: 1,
      role: 'Admin',
      desc: '全站無阻可以編輯、發佈與建立帳戶',
    },
    {
      id: 2,
      role: '主管',
      desc: '都可以編輯與發佈，但無法新增主管權級或以上的資料',
    },
    {
      id: 3,
      role: '客服',
      desc: '可以查詢全部經銷商基本資料與全部經銷商訂單資料，可以幫助經銷商查找帳號密碼',
    },
    {
      id: 4,
      role: '經銷商',
      desc: '可以查詢經銷商基本資料與經銷商過往的訂單資訊',
    },
  ]

  const handleChange = (event) => {
    const selectedId = Number(event.target.value)
    const roleData = roleList.find((role) => role.id === selectedId)
    setSelectRoleId(roleData.id)
    setSelectRoleName(roleData.role)
    setSelectRoleDesc(roleData.desc)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('selectRoleId=' + selectRoleId)
    console.log('form.checkValidity()=' + form.checkValidity())
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
      if (selectRoleId == 0) {
        //未選擇角色
      } else if (selectRoleId == 4) {
        //新增經銷商
      } else {
        //新增管理者
        fetchAdmin()
      }
      //導到經銷商列表
      // setModalObj({
      //   alert: 'alert',
      //   type: '',
      //   title: '訊息通知',
      //   msg: '經銷商建立成功',
      //   time: 1500,
      //   navurl: '/admin/user/list',
      // })
    }
    setValidated(true)
  }

  const fetchAdmin = async () => {
    try {
      let sendData = {
        username: username,
        password: password,
        level: level,
        name: name,
        contact_number: contact_number,
        phone_number: phone_number,
        line_id: line_id,
      }
      const result = await apiAddAdmin(sendData)
      console.log('result=' + JSON.stringify(result))
      if (result.code === '0000') {
        setAuthToken(result.result.token)
        //navigate('/dashboard')
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{selectRoleName}基本資料</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">{selectRoleDesc}</p>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <MessageModal modalObj={modalObj}></MessageModal>
              <CRow className="my-3">
                <CFormLabel htmlFor="validationUserId" className="col-sm-1 col-form-label">
                  角色
                </CFormLabel>
                <CCol sm={6}>
                  <CFormSelect required onChange={handleChange}>
                    <option selected disabled value="">
                      請選擇要新增的角色
                    </option>
                    {roleList.map((row, index) => (
                      <option key={index} value={row['id']}>
                        {row['role']}
                      </option>
                    ))}
                  </CFormSelect>
                  <CFormFeedback invalid>請選擇要新增的角色</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationUserId" className="col-sm-1 col-form-label">
                  帳號
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="validationUserId" defaultValue="" required />
                  <CFormFeedback invalid>請輸入帳號</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationPwd" className="col-sm-1 col-form-label">
                  密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="validationPwd" defaultValue="" required />
                  <CFormFeedback invalid>請輸入密碼</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationPwdConfirm" className="col-sm-1 col-form-label">
                  密碼確認
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="password" id="validationPwdConfirm" defaultValue="" required />
                  <CFormFeedback invalid>請輸入密碼</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationLineIdConfirm" className="col-sm-1 col-form-label">
                  Line ID
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="validationLineIdConfirm" defaultValue="" required />
                  <CFormFeedback invalid>請輸入line ID</CFormFeedback>
                </CCol>
              </CRow>
              {selectRoleId == 4 ? DealerForm() : AdminForm()}

              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  建立
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Create
