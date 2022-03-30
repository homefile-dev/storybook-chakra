export const isEmptyField = (field: string): boolean => {
  return field.trim() === ''
}

export const isValidEmail = (email: string): boolean => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const isValidPassword = (password: string): boolean => {
  return password.trim().length >= 6
}

export const passwordMatch = (password: string, confirmPassword: string): boolean => {
  return password.trim() === confirmPassword.trim()
}
