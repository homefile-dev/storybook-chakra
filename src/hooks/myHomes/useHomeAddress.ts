import { ChangeEvent, useState } from 'react'
import { AddressForm } from '../../helpers/myHomes/Address.helper'
import { IAddressForm } from '../../interfaces/myHomes/Address.interface'
import { IHomeForm } from '../../interfaces/myHomes/Home.interface'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'

export const useHomeAddress = () => {
  const [addressInputs, setAddressInputs] = useState(AddressForm)
  const [counter, setCounter] = useState(0)
  const [complements, setComplements] = useState<string[]>([])
  const keys = ['apartmentNumber', 'obs']

  const handleAddComplements = () => {
    setCounter((counter) => counter + 1)
    if (counter < 2) {
      setComplements([keys[counter], ...complements].reverse())
    }
  }

  const handleDeleteComplements = (complement: string) => {
    setCounter(counter - 1)
    if (counter >= 0) {
      setComplements(complements.filter((item) => item !== complement))
      setAddressInputs({
        ...addressInputs,
        [complement]: '',
      })
      firstHomeProxy[complement as keyof IHomeForm] = ''
    }
  }

  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInputs({
      ...addressInputs,
      [event.target.id]: event.target.value,
    })
    firstHomeProxy[event.target.id as keyof IHomeForm] = event.target.value
  }

  const handleAddressAutoFill = (values: IAddressForm) => {
    if (values) {
      setAddressInputs(values)
      Object.keys(values).forEach((key) => {
        firstHomeProxy[key as keyof IHomeForm] =
          values[key as keyof IAddressForm]
      })
      setComplements(() => {
        if (values.apartmentNumber !== '' && values.obs !== '') {
          setCounter(2)
          return ['apartmentNumber', 'obs']
        }
        if (values.apartmentNumber !== '') {
          setCounter(1)
          return ['apartmentNumber']
        }
        if (values.obs !== '') {
          setCounter(1)
          return ['obs']
        }
        return []
      })
    }
  }

  return {
    complements,
    counter,
    handleAddressAutoFill,
    handleAddressInputChange,
    handleAddComplements,
    handleDeleteComplements,
    addressInputs,
  }
}

export default useHomeAddress
