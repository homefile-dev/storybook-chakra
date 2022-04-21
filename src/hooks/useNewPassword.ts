import { ChangeEvent, useState } from 'react'
import { NewPasswordForm } from '../helpers/NewPassword.helper'

export const useNewPassword = () => {
  const [inputs, setInputs] = useState(NewPasswordForm)
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

export default useNewPassword
