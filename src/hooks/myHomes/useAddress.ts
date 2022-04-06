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

  const handleDeleteComplements = (complement: string) => {
    setCounter(counter - 1)
    if (counter >= 0) {
      setComplements(complements.filter((item) => item !== complement))
      setInputs({
        ...inputs,
        [complement]: '',
      })
    }
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
    handleDeleteComplements,
    inputs,
    isValidated,
    setIsValidated,
  }
}

export default useAddress
