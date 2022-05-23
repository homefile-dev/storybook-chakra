export interface EmailFormI {
  email: string
}

export interface ResetPasswordI {
  handleSignIn: () => void
  handleReset: (form: EmailFormI) => void
  isLoading: boolean
  resetError: boolean
}