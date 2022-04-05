export interface IEmailForm {
  email: string
}

export interface IResetPassword {
  isLoading: boolean
  handleSignIn: () => void
  handleReset: (form: IEmailForm) => void
  resetError: boolean
  privacyUrl: string
  termsUrl: string
}