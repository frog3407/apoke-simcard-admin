import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import ChannelProducts from '../../../components/ChannelProducts'
const Channel1 = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>渠道1產品列表</strong>
          </CCardHeader>
          <CCardBody>
            <ChannelProducts
              channelName={import.meta.env.VITE_PRODUCT_CHANNEL1}
              isSelect={false}
            ></ChannelProducts>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Channel1
