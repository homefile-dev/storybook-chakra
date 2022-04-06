import { ChangeEvent, useState } from 'react'

export const useFirstHouseContent = () => {
  const [inputs, setInputs] = useState({
    projectName: '',
  })
  const [isValidated, setIsValidated] = useState(false)
  const options = ["option1", "option2", "option3", "option4"];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      projectName: event.target.value,
    })
  }

  return {
    handleInputChange,
    inputs,
    isValidated,
    options,
    setIsValidated,
  }
}

export default useFirstHouseContent
