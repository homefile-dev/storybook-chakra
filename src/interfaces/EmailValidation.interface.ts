export interface IEmailValidation {
  email: string
  isLoading?: boolean
  handleResendBt: () => void
}