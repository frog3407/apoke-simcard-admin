import React, { useEffect, useState } from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const MessageModal = ({ modalObj }) => {
  const [visible, setVisible] = useState(false)
  const [closeBtn, setCloseBtn] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (navurl, type) => {
    if (navurl) {
      navigate(navurl)
    }
  }

  const startTimer = (time, type) => {
    if (time && time > 0) {
      setTimeout(() => {
        setVisible(false)
        if (type === 'reload') {
          navigate(0) // 在計時器結束後觸發重新整理
        }
      }, time)
    } else if (type === 'reload') {
      navigate(0) // 若無計時器，立即觸發重新整理
    }
  }

  useEffect(() => {
    if (!modalObj || Object.keys(modalObj).length === 0) {
      console.log('modalObj is empty, skipping effect')
      return
    }

    const { closebtn, navurl, type, time } = modalObj
    setCloseBtn(!!closebtn)
    if (navurl) {
      handleNavigation(navurl, type)
    }
    setVisible(true)
    startTimer(time, type) // 傳遞 type 以處理 reload 邏輯
  }, [JSON.stringify(modalObj)]) // 使用 JSON.stringify 比較 modalObj 的變化

  return (
    <CModal
      alignment="center"
      fullscreen="sm"
      visible={visible}
      backdrop="static"
      keyboard={false}
      onClose={() => setVisible(false)}
      aria-labelledby="FullscreenExample2"
    >
      <CModalHeader closeButton={closeBtn}>
        <CModalTitle id="FullscreenExample2">{modalObj?.title}</CModalTitle>
      </CModalHeader>
      <CModalBody>{modalObj?.msg}</CModalBody>
    </CModal>
  )
}

MessageModal.propTypes = {
  modalObj: PropTypes.shape({
    alert: PropTypes.string, //"alert":"[alert|confirm]"
    title: PropTypes.string, //"title":"訊息標題"
    msg: PropTypes.string, //"msg":"訊息內容"
    time: PropTypes.number, //"time":[執行的時間 單位毫秒]
    navurl: PropTypes.string, //"navurl":"[如需要跳轉輸入url]"
    closebtn: PropTypes.bool, //"closebtn":[true|false] 是否顯示關閉按鈕
    type: PropTypes.string, //"type":"[空|reload:重新整理]""
  }),
}

export default MessageModal
