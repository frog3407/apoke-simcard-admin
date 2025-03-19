import axios from 'axios'
let getHeaders = (useAuth = true) => {
  let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (useAuth) {
    headers.Authorization = 'Bearer ' + getAuthToken()
  }

  return headers
}
const handlePayload = (payload) => {
  if (payload != null) {
    Object.keys(payload).forEach((key) => {
      if (payload[key] === '') {
        delete payload[key]
      }
    })
  }
  return payload
}

export const getAuthToken = () => {
  var token = localStorage.getItem('token')
  if (token != null) {
    return token
  } else {
    return null
  }
}

export const setAuthToken = (token) => {
  localStorage.setItem('token', token)
  //cookies.set(TOKEN_NAME, token, { path: '/' })
}
export const removeAuthToken = () => {
  localStorage.removeItem('token')
  //cookies.remove(TOKEN_NAME, { path: '/' })
}

const handleResponse = async (response, isContinue, download) => {
  //   document.querySelector('.popup-loading').classList.remove('active')

  //   if (!isContinue) {
  //     document.querySelector('.popup-loading').classList.remove('active')
  //   }

  //   if (response.data.token != null) {
  //     setAuthToken(response.data.token)
  //   }

  //   if (response.data.code === '1001') {
  //     removeAuthToken()
  //   }
  //console.log('handleResponse=' + response)
  return download ? response : response.data
}

const handleError = (error) => {
  //   document.querySelector('.popup-loading').classList.remove('active')
  //   document.querySelector('#system-error-modal').classList.add('active')
  console.log('handleError=' + error)
}

export const fetchDataCall = async (
  api,
  method,
  payload = null,
  download = false,
  isContinue = false,
  useAuth = true,
) => {
  //   document.querySelector('.popup-loading').classList.add('active')
  console.log('api=' + api)
  let config = {
    method,
    url: `${import.meta.env.VITE_API_HOST}/api/simcard/${api}`,
    headers: getHeaders(useAuth),
    params: method === 'get' ? handlePayload(payload) : null,
    data: method !== 'get' ? payload : null,
  }

  if (download) {
    config.responseType = 'blob'
  }

  try {
    let response = await axios.request(config)
    return handleResponse(response, isContinue, download)
  } catch (error) {
    handleError(error)
  }
}

//取得渠道2產品資料
export const apiGetChannel2Products = (data) =>
  fetchDataCall('channel2/products', 'get', data, false, false, true)

//登入
export const apiLogin = (data) => fetchDataCall('user/login', 'post', data, false, false, false)
//登出
export const apiLogout = (data) => fetchDataCall('user/logout', 'post', null, false, false, true)
//修改密碼
export const apiResetPwd = (data) =>
  fetchDataCall('user/resetpwd', 'post', data, false, false, true)
//新增管理者
export const apiAddAdmin = (data) =>
  fetchDataCall('user/addadmin', 'post', data, false, false, false)
//新增經銷商
export const apiAddDealer = (data) =>
  fetchDataCall('user/adddealer', 'post', data, false, false, false)
