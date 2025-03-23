/**
 * 驗證密碼是否符合規範
 * 規範：至少8位，且包含至少一個字母和一個數字
 * @param {string} password - 要檢查的密碼
 * @returns {boolean} - 是否符合規範
 */
export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return regex.test(password)
}

/**
 * 驗證帳號是否符合規範
 * 規範：3-10位英文或數字
 * @param {string} username - 要檢查的帳號
 * @returns {boolean} - 是否符合規範
 */
export const validateUsername = (username) => {
  const regex = /^[A-Za-z0-9]{3,10}$/
  return regex.test(username)
}

/**
 * 驗證售出價格數值是否符合規範
 * 規範：範圍大於0且不超過100，允許小數點後1位
 * @param {string | number} value - 要檢查的數值
 * @returns {boolean} - 是否符合規範
 */
export const validateNumber = (value) => {
  const regex = /^(?!0$)(100(\.0)?|[1-9]?\d(\.\d)?)$/
  return regex.test(value)
}

/**
 * 驗證數值範圍是否在0-100之間
 * @param {string | number} value - 要檢查的數值
 * @returns {boolean} - 是否符合範圍
 */
export const validateRange = (value) => {
  const regex = /^(100|[1-9]?\d|0)$/
  return regex.test(value)
}

/**
 * 驗證數字是否為0以上且不可為小數點
 * @param {string | number} value - 要檢查的數值
 * @returns {boolean} - 是否符合規範
 */
export const validatePositiveInteger = (value) => {
  const regex = /^[1-9]\d*|0$/
  return regex.test(value)
}
