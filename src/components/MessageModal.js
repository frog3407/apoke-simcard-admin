import React, { useEffect, useState } from 'react'
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
const MessageModal = (props) => {
  const { modalObj } = props
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (modalObj) {
      const timer = (time) => {
        setTimeout(() => {
          console.log('MessageModal setTimeoute')
          setVisible(false)
          if (modalObj.navurl != '') {
            navigate(modalObj.navurl)
          }
        }, time)
      }
      console.log('modalObj.time=' + modalObj.time)
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
