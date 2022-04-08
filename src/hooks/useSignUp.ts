import { ChangeEvent, useState } from 'react'
import { SignUpForm } from '../helpers/SignUp.helper'
import { ISignUpForm } from '../interfaces/pages/SignUp.interface'

export const useSignUp = () => {
  const [inputs, setInputs] = useState<ISignUpForm>(SignUpForm)
  const [isValidated, setIsValidated] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  }

  const handleAutoFill = (values: ISignUpForm) => {
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
