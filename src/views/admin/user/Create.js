import React, { useState } from 'react'
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
import MessageModal from 'src/components/MessageModal'
import { apiAddAdmin, apiAddDealer } from '../../../utils/Api'
const Create = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [selectRoleId, setSelectRoleId] = useState(99)
  const [selectRoleName, setSelectRoleName] = useState('[請選擇角色]')
  const [selectRoleDesc, setSelectRoleDesc] = useState('[請選擇角色]')
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    password_confirm: false,
    role: false,
    dealerName: false,
    dealerNumber: false,
    dealerOwner: false,
    dealerContactName: false,
    dealerAddress: false,
    dealerContactNumber: false,
    dealerPhoneNumber: false,
  })

  const roleList = [
    {
      id: 0,
      role: 'Admin',
      desc: '全站無阻可以編輯、發佈與建立帳戶',
    },
    {
      id: 1,
      role: '主管',
      desc: '都可以編輯與發佈，但無法新增主管權級或以上的資料',
    },
    {
      id: 2,
      role: '客服',
      desc: '可以查詢全部經銷商基本資料與全部經銷商訂單資料，可以幫助經銷商查找帳號密碼',
    },
    {
      id: 3,
      role: '經銷商',
      desc: '可以查詢經銷商基本資料與經銷商過往的訂單資訊',
    },
  ]

  const AdminForm = () => {
    return (
      <CCol xs={12}>
        <CRow className="mb-3">
          <CFormLabel htmlFor="validationName" className="col-sm-1 col-form-label">
            使用者名稱
          </CFormLabel>
          <CCol sm={6}>
            <CFormInput type="text" id="validationName" name="name" defaultValue="" required />
            <CFormFeedback invalid>請輸入使用者名稱</CFormFeedback>
          </CCol>
        </CRow>

        <CRow className="mb-3">
          <CFormLabel htmlFor="validationContactNumber" className="col-sm-1 col-form-label">
            聯絡電話
          </CFormLabel>
          <CCol sm={6}>
            <CFormInput type="text" id="validationContactNumber" name="contactNumber" />
            <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="validationPhoneNumber" className="col-sm-1 col-form-label">
            手機號碼
          </CFormLabel>
          <CCol sm={6}>
            <CFormInput type="text" id="validationPhoneNumber" name="phoneNumber" />
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
              onChange={handleChange}
              className={errors.dealerName ? 'is-invalid' : ''}
            />
            {errors.dealerName && <CFormFeedback invalid>請輸入經銷商名稱</CFormFeedback>}
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="validationNumber" className="col-sm-1 col-form-label">
            統一編號
          </CFormLabel>
          <CCol sm={6}>
            <CFormInput
              type="text"
              id="validationNumber"
              name="dealerNumber"
              onChange={handleChange}
              className={errors.dealerNumber ? 'is-invalid' : ''}
            />
            {errors.dealerNumber && <CFormFeedback invalid>請輸入正確的統一編號</CFormFeedback>}
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
              onChange={handleChange}
              className={errors.dealerOwner ? 'is-invalid' : ''}
            />
            {errors.dealerOwner && <CFormFeedback invalid>請輸入負責人</CFormFeedback>}
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
              onChange={handleChange}
              className={errors.dealerContactName ? 'is-invalid' : ''}
            />
            {errors.dealerContactName && <CFormFeedback invalid>請輸入聯絡人</CFormFeedback>}
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
              onChange={handleChange}
              className={errors.dealerAddress ? 'is-invalid' : ''}
            />
            {errors.dealerAddress && <CFormFeedback invalid>請輸入聯絡地址</CFormFeedback>}
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
              onChange={handleChange}
              className={errors.dealerContactNumber ? 'is-invalid' : ''}
            />
            {errors.dealerContactNumber && <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>}
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
              onChange={handleChange}
              className={errors.dealerPhoneNumber ? 'is-invalid' : ''}
            />

            {errors.dealerPhoneNumber && <CFormFeedback invalid>請輸入手機號碼</CFormFeedback>}
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="validationNote" className="col-sm-1 col-form-label">
            備註
          </CFormLabel>
          <CCol sm={6}>
            <CFormInput type="text" id="validationNote" name="dealerNote" />
            <CFormFeedback invalid>請輸入備註</CFormFeedback>
          </CCol>
        </CRow>
      </CCol>
    )
  }

  const handleRoleChange = (event) => {
    const selectedId = Number(event.target.value)
    if (selectedId < 0 || selectedId > 3) {
      setErrors({ ...errors, role: true })
    } else {
      setErrors({ ...errors, role: false })
    }
    console.log('selectedId=' + selectedId)
    const roleData = roleList.find((role) => role.id === selectedId)
    setSelectRoleId(roleData.id)
    setSelectRoleName(roleData.role)
    setSelectRoleDesc(roleData.desc)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: false }) // 清除錯誤
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()
    setModalObj({
      alert: 'alert',
      type: '',
      title: '訊息通知',
      msg: 'test',
      time: 2000,
      navurl: '',
    })
    const username = form.elements['userId'].value
    const password = form.elements['password'].value
    const password_confirm = form.elements['password_confirm'].value
    const line_id = form.elements['line_id'].value

    const level = selectRoleId
    let isValid = true
    let newErrors = { ...errors }
    console.log('selectRoleId=' + selectRoleId)
    if (selectRoleId < 0 || selectRoleId > 3) {
      newErrors.role = true
      isValid = false
    } else {
      newErrors.role = false
    }

    const usernameRegex = /^[A-Za-z0-9]{3,10}$/
    if (!usernameRegex.test(username)) {
      newErrors.username = true
      isValid = false
    } else {
      newErrors.username = false
    }

    // 檢查密碼格式
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!passwordRegex.test(password)) {
      newErrors.password = true
      isValid = false
    } else {
      newErrors.password = false
    }

    // 檢查密碼確認
    if (password !== password_confirm) {
      newErrors.password_confirm = true
      isValid = false
    } else {
      newErrors.password_confirm = false
    }

    setErrors(newErrors)

    console.log('isValid=' + isValid)
    //檢查格式→呼叫API (未完成)
    if (level >= 0 && level < 3) {
      //新增管理者
      const name = form.elements['name'] ? form.elements['name'].value : ''
      const contact_number = form.elements['contactNumber']
        ? form.elements['contactNumber'].value
        : ''
      const phone_number = form.elements['phoneNumber'] ? form.elements['phoneNumber'].value : ''
      let sendAdminData = {
        username: username,
        password: password,
        level: level,
        name: name,
        contact_number: contact_number,
        phone_number: phone_number,
        line_id: line_id,
      }
      console.log('sendAdminData=' + sendAdminData)
      if (isValid) {
        fetchAdmin(sendAdminData)
      }
    } else if (selectRoleId == 3) {
      //新增經銷商
      const dealerName = form.elements['dealerName'] ? form.elements['dealerName'].value : ''
      const dealerNumber = form.elements['dealerNumber'] ? form.elements['dealerNumber'].value : ''
      const dealerOwner = form.elements['dealerOwner'] ? form.elements['dealerOwner'].value : ''
      const dealerContactName = form.elements['dealerContactName']
        ? form.elements['dealerContactName'].value
        : ''
      const dealerAddress = form.elements['dealerAddress']
        ? form.elements['dealerAddress'].value
        : ''
      const dealerContactNumber = form.elements['dealerContactNumber']
        ? form.elements['dealerContactNumber'].value
        : ''
      const dealerPhoneNumber = form.elements['dealerPhoneNumber']
        ? form.elements['dealerPhoneNumber'].value
        : ''
      const dealerNote = form.elements['dealerNote'] ? form.elements['dealerNote'].value : ''

      if (dealerName == '') {
        newErrors.dealerName = true
        isValid = false
      } else {
        newErrors.dealerName = false
      }
      if (dealerNumber == '') {
        newErrors.dealerNumber = true
        isValid = false
      } else {
        newErrors.dealerNumber = false
      }
      if (dealerOwner == '') {
        newErrors.dealerOwner = true
        isValid = false
      } else {
        newErrors.dealerOwner = false
      }
      if (dealerContactName == '') {
        newErrors.dealerContactName = true
        isValid = false
      } else {
        newErrors.dealerContactName = false
      }
      if (dealerAddress == '') {
        newErrors.dealerAddress = true
        isValid = false
      } else {
        newErrors.dealerAddress = false
      }
      if (dealerContactNumber == '') {
        newErrors.dealerContactNumber = true
        isValid = false
      } else {
        newErrors.dealerContactNumber = false
      }
      if (dealerPhoneNumber == '') {
        newErrors.dealerPhoneNumber = true
        isValid = false
      } else {
        newErrors.dealerPhoneNumber = false
      }
      let sendDealerData = {
        username: username,
        password: password, //密碼
        level: level, //角色
        name: dealerName, //經銷商名稱
        number: dealerNumber, //統一編號
        owner: dealerOwner, //負責人
        contact_name: dealerContactName, //聯絡人
        contact_addr: dealerAddress, //聯絡地址
        contact_number: dealerContactNumber, //聯絡電話
        phone_number: dealerPhoneNumber, //手機號碼
        note: dealerNote, //備註
        line_id: line_id,
      }
      if (isValid) {
        fetchDealer(sendDealerData)
      }
    } else {
      //未選擇角色
    }
  }

  const fetchAdmin = async (sendData) => {
    try {
      console.log('sendData=' + sendData)
      const result = await apiAddAdmin(sendData)
      console.log('result=' + JSON.stringify(result))
      if (result.code === '0000') {
        //navigate('/dashboard')
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '建立成功',
          time: 1500,
          navurl: '/admin/user/list',
        })
      } else {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '建立失敗，錯誤訊息:' + result.message,
          time: 2000,
          navurl: '',
        })
      }
    } catch (error) {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '建立失敗，錯誤訊息:' + error,
        time: 2000,
        navurl: '',
      })
    }
  }
  const fetchDealer = async (sendData) => {
    try {
      console.log('sendData=' + sendData)
      const result = await apiAddDealer(sendData)
      console.log('result=' + JSON.stringify(result))
      if (result.code === '0000') {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '建立成功',
          time: 1500,
          navurl: '/admin/user/list',
        })
      } else {
        setModalObj({
          alert: 'alert',
          type: '',
          title: '訊息通知',
          msg: '建立失敗，錯誤訊息:' + result.message,
          time: 2000,
          navurl: '',
        })
      }
    } catch (error) {
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '建立失敗，錯誤訊息:' + error,
        time: 2000,
        navurl: '',
      })
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
            <MessageModal modalObj={modalObj}></MessageModal>
            <p className="text-body-secondary small">{selectRoleDesc}</p>
            <CForm className="row g-3" noValidate onSubmit={handleSubmit}>
              <CRow className="my-3">
                <CFormLabel htmlFor="validationUserId" className="col-sm-1 col-form-label">
                  角色
                </CFormLabel>
                <CCol sm={6}>
                  <CFormSelect
                    onChange={handleRoleChange}
                    className={errors.role ? 'is-invalid' : ''}
                  >
                    <option value="99">請選擇要新增的角色</option>
                    {roleList.map((row, index) => (
                      <option key={index} value={row['id']}>
                        {row['role']}
                      </option>
                    ))}
                  </CFormSelect>
                  {errors.role && <CFormFeedback invalid>請選擇要新增的角色</CFormFeedback>}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationUserId" className="col-sm-1 col-form-label">
                  帳號
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="text"
                    id="validationUserId"
                    name="userId"
                    onChange={handleChange}
                    className={errors.username ? 'is-invalid' : ''}
                  />
                  {errors.username && (
                    <CFormFeedback invalid>
                      帳號必須為英數字組成，至少3個字元最多10個字元
                    </CFormFeedback>
                  )}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationPwd" className="col-sm-1 col-form-label">
                  密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="password"
                    id="validationPwd"
                    name="password"
                    onChange={handleChange}
                    className={errors.password ? 'is-invalid' : ''}
                  />
                  {errors.password && (
                    <CFormFeedback invalid>
                      密碼必須至少包含8個字符，且包含至少一個字母和一個數字
                    </CFormFeedback>
                  )}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationPwdConfirm" className="col-sm-1 col-form-label">
                  密碼確認
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="password"
                    id="validationPwdConfirm"
                    name="password_confirm"
                    onChange={handleChange}
                    className={errors.password_confirm ? 'is-invalid' : ''}
                  />
                  {errors.password_confirm && (
                    <CFormFeedback invalid>密碼和密碼確認不一致</CFormFeedback>
                  )}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="validationLineIdConfirm" className="col-sm-1 col-form-label">
                  Line ID
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput type="text" id="validationLineIdConfirm" name="line_id" />
                  <CFormFeedback invalid>請輸入line ID</CFormFeedback>
                </CCol>
              </CRow>
              {selectRoleId == 3 ? DealerForm() : AdminForm()}

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
