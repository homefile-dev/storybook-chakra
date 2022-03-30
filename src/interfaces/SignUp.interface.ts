export interface ISignUpForm {
  email: string
  confirmPassword: string
  firstName: string
  lastName: string
  password: string
}

export interface ISignUp {
  handleCreateAccount: (form: ISignUpForm) => void
  handleSignIn: () => void
  privacyUrl: string
  signupError: boolean
  termsUrl: string
}