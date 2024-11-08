import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilXCircle } from '@coreui/icons'
import ChannelProducts from '../../components/ChannelProducts'

const Create = () => {
  const [selectedItems, setSelectedItems] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [validated, setValidated] = useState(false)
  const [visible, setVisible] = useState(false)
  const [selectedChannel, setselectedChannel] = useState(import.meta.env.VITE_PRODUCT_CHANNEL1)

  //從ChannelProducts選擇的商品
  const handleGetSelectedItems = (value) => {
    console.log('handleGetSelectedItems value=' + JSON.stringify(value))
    setSelectedItems(value)
  }
  const handleSelectChannel = (event) => {
    setselectedChannel(event.target.value)
    //清空購物車
    setCartItems([])
    console.log('handleSelectChannel value=' + event.target.value)
  }

  //將選擇的商品加入購物車中中
  const handelAddItemsToCart = () => {
    let cartSelectedValue = selectedItems
    setCartItems(cartSelectedValue)
    setVisible(false)
    console.log('handelSendItems value=' + selectedItems)
  }
  //
  const handelDelCartItem = (event, itemCode) => {
    console.log('handelDelCartItem itemCode=' + itemCode)
    let newCartItems = cartItems
    newCartItems = newCartItems.reduce((acc, item) => {
      if (item.itemCode !== itemCode) {
        acc.push(item) // 只有不匹配的項目才加入新陣列
      }
      return acc
    }, [])
    setCartItems(newCartItems)
  }

  // 更新商品数量并重新计算价格
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return // 不能小於1

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.itemCode === id ? { ...item, itemQuantity: newQuantity } : item,
      ),
    )
  }
  // 计算每个商品的总价
  const getItemTotalPrice = (item) => item.itemPrice * item.itemQuantity
  // 计算所有商品的总价
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + getItemTotalPrice(item), 0)
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
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
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="username">客戶姓名</CFormLabel>
        <CFormInput type="text" id="username" defaultValue="" required />
        <CFormFeedback invalid>請輸入客戶姓名</CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput type="text" id="email" defaultValue="" required />
        <CFormFeedback invalid>請輸入Email</CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="cellphone">聯絡電話</CFormLabel>
        <CFormInput type="text" id="cellphone" defaultValue="" required />
        <CFormFeedback invalid>請輸入聯絡電話</CFormFeedback>
      </CCol>
      <CCol md={12} className="position-relative">
        <CFormLabel htmlFor="note">備註</CFormLabel>
        <CFormInput type="text" id="note" defaultValue="" />
        <CFormFeedback invalid>請輸入備註</CFormFeedback>
      </CCol>
      <CCol md={12} className="position-relative">
        <CFormLabel htmlFor="channelType">渠道類型&nbsp;&nbsp;&nbsp;&nbsp;</CFormLabel>
        <CFormCheck
          inline
          type="radio"
          value={import.meta.env.VITE_PRODUCT_CHANNEL1}
          name="channelType"
          id="fchannelType1"
          label="渠道1"
          checked={selectedChannel === import.meta.env.VITE_PRODUCT_CHANNEL1}
          onChange={handleSelectChannel}
        />
        <CFormCheck
          inline
          type="radio"
          value={import.meta.env.VITE_PRODUCT_CHANNEL2}
          name="channelType"
          id="fchannelType2"
          label="渠道2"
          checked={selectedChannel === import.meta.env.VITE_PRODUCT_CHANNEL2}
          onChange={handleSelectChannel}
        />
      </CCol>
      <CCol md={12}>
        <CFormLabel htmlFor="validationDefault05">
          商品列表&nbsp;&nbsp;&nbsp;&nbsp;
          <CButton color="info" size="sm" onClick={() => setVisible(!visible)}>
            新增商品
          </CButton>
        </CFormLabel>
      </CCol>
      <CCol md={12}>
        <CTable>
          <CTableHead color="secondary">
            <CTableRow>
              <CTableHeaderCell scope="col" className="text-nowrap">
                商品名稱
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                單價
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                激活日期
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                數量
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                總價
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="text-nowrap">
                操作
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {cartItems.map((row, index) => (
              <CTableRow key={index} id={row['itemCode']}>
                <CTableDataCell>{row['itemName']}</CTableDataCell>
                <CTableDataCell>{row['itemPrice']}</CTableDataCell>
                <CTableDataCell>{row['itemDate']}</CTableDataCell>
                <CTableDataCell>
                  <CFormInput
                    type="number"
                    size="sm"
                    max={10}
                    min={1}
                    value={row['itemQuantity']}
                    onChange={(e) => updateQuantity(row['itemCode'], parseInt(e.target.value, 10))}
                  />
                </CTableDataCell>
                <CTableDataCell>{getItemTotalPrice(row).toFixed(2)}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="danger"
                    size="sm"
                    onClick={(e) => handelDelCartItem(e, row['itemCode'])}
                  >
                    <CIcon icon={cilTrash} size="sm" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCol>
      <CRow className="my-2 text-end">
        <CCol>商品總價：{getTotalPrice().toFixed(2)}元</CCol>
        <CCol>應結算金額：{getTotalPrice().toFixed(2)}元</CCol>
      </CRow>
      <CCol xs={12} className="mb-5">
        <CButton color="primary" type="submit" className="float-end">
          送出
        </CButton>
      </CCol>
      <CModal
        size="xl"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel">商品列表</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ChannelProducts
            channelName={selectedChannel}
            isSelect={true}
            onSelectedItem={handleGetSelectedItems}
            cartItems={cartItems}
          ></ChannelProducts>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            取消
          </CButton>
          <CButton color="primary" onClick={handelAddItemsToCart}>
            確認
          </CButton>
        </CModalFooter>
      </CModal>
    </CForm>
  )
}
export default Create
