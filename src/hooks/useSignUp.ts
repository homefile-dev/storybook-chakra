import { ChangeEvent, useState } from 'react'
import { SignUpForm } from '../helpers/SignUp.helper'

export const useSignUp = () => {
  const [inputs, setInputs] = useState(SignUpForm)
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

export default useSignUp
