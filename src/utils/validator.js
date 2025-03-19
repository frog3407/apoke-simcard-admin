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
