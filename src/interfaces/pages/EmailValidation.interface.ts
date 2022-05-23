export interface EmailValidationI {
  email: string
  isLoading?: boolean
  handleResendBt: () => void
}