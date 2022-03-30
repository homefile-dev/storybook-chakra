import { ChangeEvent, useState } from 'react'
import { SignInForm } from '../helpers/SignIn.helper'

export const useSignIn = () => {
  const [inputs, setInputs] = useState(SignInForm)
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

export default useSignIn
