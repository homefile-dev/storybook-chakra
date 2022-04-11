import { ChangeEvent, useState } from 'react'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'

export const useFirstHouseContent = () => {
  const [inputs, setInputs] = useState({
    projectIdentifier: '',
    relationship: '',
  })
  const [isValidated, setIsValidated] = useState(false)
  const options = ['option1', 'option2', 'option3', 'option4']

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      projectIdentifier: event.target.value,
    })
    firstHomeProxy.projectIdentifier = event.target.value
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      relationship: event.target.value,
    })
    firstHomeProxy.relationship = event.target.value
  }

  return {
    handleInputChange,
    handleSelectChange,
    inputs,
    isValidated,
    options,
    setIsValidated,
  }
}

export default useFirstHouseContent
