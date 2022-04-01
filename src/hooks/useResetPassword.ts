import { ChangeEvent, useState } from 'react'
import { ResetPasswordForm } from '../helpers/ResetPassword.helper'

export const useResetPassword = () => {
  const [inputs, setInputs] = useState(ResetPasswordForm)
  const [isValidated, setIsValidated] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  }

  return {
    inputs,
    handleInputChange,
    isValidated,
    setIsValidated,
  }
}

export default useResetPassword
