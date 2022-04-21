export interface INewPasswordForm {
  password: string
  confirmPassword: string
}

export interface INewPassword {
  isLoading: boolean
  handleReset: (form: INewPasswordForm) => void
  userEmail: string
}