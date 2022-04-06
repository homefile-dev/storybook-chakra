import { ChangeEvent, useState } from 'react'
import { AddressForm } from '../../helpers/myHomes/Address.helper'

export const useAddress = () => {
  const [inputs, setInputs] = useState(AddressForm)
  const [isValidated, setIsValidated] = useState(false)
  const [counter, setCounter] = useState(0)
  const [complements, setComplements] = useState<string[]>([])

  const handleAddComplements = () => {
    setCounter(counter + 1)
    counter < 2 &&
      setComplements([`complement${counter + 1}`, ...complements].reverse())
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  }

  return {
    complements,
    counter,
    handleInputChange,
    handleAddComplements,
    inputs,
    isValidated,
    setIsValidated,
  }
}

export default useAddress
