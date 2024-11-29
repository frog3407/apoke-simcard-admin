import React, { useEffect, useState } from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
const MessageModal = (props) => {
  const { modalObj } = props
  //定義 modalobj={"alert":"alert","type":"[空|reload:重新整理]"","title":"訊息標題","msg":"訊息內容","time":[執行的時間 單位毫秒],"navurl":"[如需要跳轉輸入url]"}
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (modalObj) {
      const timer = (time) => {
        setTimeout(() => {
          console.log('MessageModal setTimeoute')
          setVisible(false)
          console.log('MessageModal navurl=' + JSON.stringify(modalObj))
          if (modalObj.navurl != '') {
            console.log('MessageModal navigate')
            navigate(modalObj.navurl)
          }
          if (modalObj.type == 'reload') {
            navigate(0)
          }
        }, time)
      }

      if (modalObj.time && modalObj.time > 0) {
        setVisible(true)
        timer(modalObj.time)
      }
    }
  }, [modalObj])
  return (
    <CModal
      alignment="center"
      fullscreen="sm"
      visible={visible}
      backdrop="static"
      keyboard={false}
      //   onClose={() => setVisible(false)}
      aria-labelledby="FullscreenExample2"
    >
      <CModalHeader closeButton={false}>
        <CModalTitle id="FullscreenExample2">{modalObj.title}</CModalTitle>
      </CModalHeader>
      <CModalBody>{modalObj.msg}</CModalBody>
    </CModal>
  )
}
MessageModal.propTypes = {
  modalObj: PropTypes.object,
}
export default MessageModal
