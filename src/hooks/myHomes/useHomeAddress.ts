import { ChangeEvent, useEffect, useState } from 'react'
import { AddressForm } from '../../helpers/myHomes/Address.helper'
import { IAddressForm } from '../../interfaces/myHomes/Address.interface'
import { IHomeForm } from '../../interfaces/myHomes/Home.interface'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'

export const useHomeAddress = () => {
  const [addressInputs, setAddressInputs] = useState(AddressForm)
  const [counter, setCounter] = useState(0)
  const [complements, setComplements] = useState<string[]>([])

  const handleAddComplements = () => {
    setCounter((counter) => counter + 1)
    if (counter < 2) {
      setComplements([`${counter + 1}`, ...complements].reverse())
    }
  }

  const handleDeleteComplements = (complement: string) => {
    console.log(`deletou: ${complement}`)
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
        if (values.address1 !== '' && values.address2 !== '')
          return ['address1', 'address2']
        if (values.address1 !== '') return ['address1']
        if (values.address2 !== '') return ['address2']
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
