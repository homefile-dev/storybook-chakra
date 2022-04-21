export interface ISignUpForm {
  confirmPassword?: string
  email: string
  firstName: string
  lastName: string
  password?: string 
}

export interface ISignUp {
  isLoading: boolean
  handleCreateAccount: (form: ISignUpForm) => void
  handleSignIn: () => void
  signupError: boolean
  values?: ISignUpForm
}