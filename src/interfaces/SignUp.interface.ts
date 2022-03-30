export interface ISignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface ISignUp {
  termsUrl: string
  privacyUrl: string
  handleCreateAccount: (form: ISignUpForm) => void
  handleSignIn: () => void
}