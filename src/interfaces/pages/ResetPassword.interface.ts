export interface IEmailForm {
  email: string
}

export interface IResetPassword {
  handleSignIn: () => void
  handleReset: (form: IEmailForm) => void
  isLoading: boolean
  resetError: boolean
}