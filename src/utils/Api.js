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
  var token = cookies.get(TOKEN_NAME)
  if (token != null) {
    return token
  } else {
    return null
  }
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
  console.log('handleResponse=' + response)
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
  fetchDataCall('channel2/products', 'get', data, false, false, false)
