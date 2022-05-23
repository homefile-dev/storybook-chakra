export interface SignInFormI {
  email: string
  password: string
}

export interface SignInI {
  isLoading: boolean
  handleForgotPassword: () => void
  handleSignIn: (form: SignInFormI) => void
  handleSignUp: () => void
  loginError: boolean
  values?: SignInFormI
}