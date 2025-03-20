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
import { apiResetPwd } from '../../utils/Api'
import { validatePassword } from '../../utils/validator'

const Pwd = () => {
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const [errors, setErrors] = useState({
    password: false,
    newPassword: false,
    newPasswordConfirm: false,
  })
  const [errorMessage, setErrorMessage] = useState('') //錯誤訊息
  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()

    let isValid = true
    let newErrors = { ...errors }

    const oldPwd = form.elements.inputOldPwd.value
    const newPwd = form.elements.inputNewPwd.value
    const confirmNewPwd = form.elements.inputConfirmNewPwd.value
    if (!validatePassword(oldPwd)) {
      //密碼格式不符合規範
      newErrors.password = true
      isValid = false
    } else {
      newErrors.password = false
    }
    if (!validatePassword(newPwd)) {
      //新密碼格式不符合規範
      newErrors.newPassword = true
      isValid = false
    } else {
      newErrors.newPassword = false
    }
    if (newPwd !== confirmNewPwd) {
      //新密碼與確認新密碼不相符
      newErrors.newPasswordConfirm = true
      isValid = false
    } else {
      newErrors.newPasswordConfirm = false
    }

    setErrors(newErrors)
    if (!isValid) {
      return
    }

    //呼叫API
    const result = await apiResetPwd({
      pwd: oldPwd,
      newPwd: newPwd,
      confirmnewpwd: confirmNewPwd,
    })
    // console.log('apiResetPwd result:', result)
    if (result.code === '0000') {
      //修改密碼成功
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '密碼修改成功',
        time: 0,
        navurl: '',
        closebtn: true,
      })
      //清空輸入框欄位
      form.elements.inputOldPwd.value = ''
      form.elements.inputNewPwd.value = ''
      form.elements.inputConfirmNewPwd.value = ''
      setErrorMessage('')
    } else if (result.code === '1014') {
      // setErrors({ password: true })
      setErrorMessage('當前密碼錯誤')
    } else {
      setErrorMessage('修改失敗：' + result.message)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>修改密碼</strong>
          </CCardHeader>
          <CCardBody>
            <MessageModal modalObj={modalObj}></MessageModal>
            <CForm className="needs-validation" noValidate onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputOldPwd" className="col-sm-2 col-form-label">
                  當前密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="password"
                    id="inputOldPwd"
                    className={errors.password ? 'is-invalid' : ''}
                  />
                  {errors.password && <CFormFeedback invalid>密碼格式不符合規則</CFormFeedback>}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputNewPwd" className="col-sm-2 col-form-label">
                  新密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="password"
                    id="inputNewPwd"
                    className={errors.newPassword ? 'is-invalid' : ''}
                  />
                  {errors.newPassword && (
                    <CFormFeedback invalid>新密碼格式不符合規則</CFormFeedback>
                  )}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputConfirmNewPwd" className="col-sm-2 col-form-label">
                  確認新密碼
                </CFormLabel>
                <CCol sm={6}>
                  <CFormInput
                    type="password"
                    id="inputConfirmNewPwd"
                    className={errors.newPasswordConfirm ? 'is-invalid' : ''}
                  />
                  {errors.newPasswordConfirm && (
                    <CFormFeedback invalid>新密碼與確認新密碼不相符</CFormFeedback>
                  )}
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol xs={1}>
                  <CButton color="primary" type="submit">
                    修改密碼
                  </CButton>
                </CCol>
                {errorMessage && <div className="col-sm-6 text-danger">{errorMessage}</div>}
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Pwd
