import React, { useState } from 'react'
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
import CIcon from '@coreui/icons-react'
import { cilTrash, cilXCircle } from '@coreui/icons'
import MessageModal from 'src/components/MessageModal'

const LevelManage = () => {
  const [validated, setValidated] = useState(false)
  const [modalObj, setModalObj] = useState({}) //顯示modal
  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    form.classList.add('was-validated')
    if (form.checkValidity() === true) {
      //檢查格式→呼叫API (未完成)
      //form.classList.remove('is-invalid')
      setModalObj({
        alert: 'alert',
        type: '',
        title: '訊息通知',
        msg: '儲存成功',
        time: 1500,
        navurl: '',
      })
      handleClickTransitionAlert(event)
      //form.reset()
    }
    setValidated(true)
  }

  const handleClickTransitionAlert = (event) => {
    setTimeout(() => {
      setValidated(false)
      //event.target.reset()
    }, 1500)
  }
  return (
    <CRow>
      <MessageModal modalObj={modalObj}></MessageModal>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>經銷商分級設定</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row mx-5 g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CTable bordered>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col" className="text-end">
                      分級名稱
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">分潤%數</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      銀光
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="level1"
                            defaultValue="50"
                            required
                            max={100}
                            min={1}
                          />
                          <CFormFeedback invalid>請輸入銀光分潤%數</CFormFeedback>
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      金燦
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="level2"
                            defaultValue="40"
                            required
                            max={100}
                            min={1}
                          />
                          <CFormFeedback invalid>請輸入金燦分潤%數</CFormFeedback>
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      白金
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="level3"
                            defaultValue="45"
                            required
                            max={100}
                            min={1}
                          />
                          <CFormFeedback invalid>請輸入白金分潤%數</CFormFeedback>
                        </CCol>
                        <CCol sm="auto">%</CCol>
                      </CRow>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="text-end">
                      黑鑽
                    </CTableHeaderCell>
                    <CTableDataCell>
                      <CRow>
                        <CCol sm="auto">
                          <CFormInput
                            type="number"
                            id="level4"
                            defaultValue="35"
                            required
                            max={100}
                            min={1}
                          />
                          <CFormFeedback invalid>請輸入黑鑽分潤%數</CFormFeedback>
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
