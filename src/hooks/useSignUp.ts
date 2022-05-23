import { ChangeEvent, useState } from 'react'
import { SignUpForm } from '../helpers/SignUp.helper'
import { SignUpFormI } from '../interfaces/pages/SignUp.interface'

export const useSignUp = () => {
  const [inputs, setInputs] = useState<SignUpFormI>(SignUpForm)
  const [isValidated, setIsValidated] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  }

  const handleAutoFill = (values: SignUpFormI) => {
    setInputs(values)
  }

  return {
    inputs,
    handleAutoFill,
    handleInputChange,
    isValidated,
    setIsValidated,
  }
}

export default useSignUp
