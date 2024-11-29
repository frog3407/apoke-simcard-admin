import React from 'react'
import { useParams } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
const Detail = () => {
  const { id } = useParams() // 取得路徑中的動態 ID
  return (
    <>
      <div className="p-2">
        <CCard className="mb-4">
          <CCardBody>
            <CRow className="text-center mb-3">
              <CCol md={12}>
                <h2>產品更新通知{id}</h2>
              </CCol>
              <CCol md={12}>2024-11-29 17:07:31</CCol>
            </CRow>
            <CRow className="mx-3">
              <CCol md={12}>
                JOYTEL卡充值注意事项： ①
                充值套餐有效期请查看商品报价（基础数据管理-商品管理-商品报价） ②
                卓一发货系统只能自动充值天数，如需重置流量请联系人工客服。 ③
                已激活的充值套餐不支持取消，未激活的套餐如需取消的需收取2元的手续费。 ④
                单次充值不要超过30天，单张卡超过30天的可以分多次充值，不限充值次数（比如要充值40天套餐，分两次下单，先充值30天，再充值10天）
                ⑤ 如果是X天XGB这种总量套餐，天数填写1即可。（比如日本30天3GB，天数那边填1即可）
                ①批量充值模板里，充值商品名称【商品报价】里面复制，切勿手打，因为有些名称为了视觉统一，加了空格。
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Detail
