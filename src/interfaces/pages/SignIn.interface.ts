export interface ISignInForm {
  email: string
  password: string
}

export interface ISignIn {
  isLoading: boolean
  handleForgotPassword: () => void
  handleSignIn: (form: ISignInForm) => void
  handleSignUp: () => void
  loginError: boolean
  privacyUrl: string
  termsUrl: string
  values?: ISignInForm
}