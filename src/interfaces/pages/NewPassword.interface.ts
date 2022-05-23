export interface NewPasswordFormI {
  password: string
  confirmPassword: string
}

export interface NewPasswordI {
  isLoading: boolean
  handleReset: (form: NewPasswordFormI) => void
  userEmail: string
}