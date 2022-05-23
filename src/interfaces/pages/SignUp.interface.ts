export interface SignUpFormI {
  confirmPassword?: string
  email: string
  firstName: string
  lastName: string
  password?: string
}

export interface SignUpI {
  isLoading: boolean
  handleCreateAccount: (form: SignUpFormI) => void
  handleSignIn: () => void
  signupError: boolean
  values?: SignUpFormI
}