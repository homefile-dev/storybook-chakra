import { ChangeEvent, useState } from 'react'
import { SignInForm } from '../helpers/SignIn.helper'
import { ISignInForm } from '../interfaces/pages/SignIn.interface'

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

  const handleAutoFill = (values: ISignInForm) => {
    setInputs(values)
  }

  return {
    inputs,
    handleAutoFill,
    handleInputChange,
    isValidated,
    setInputs,
    setIsValidated,
  }
}

export default useSignIn
