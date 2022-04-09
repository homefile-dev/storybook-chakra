import { AxiosResponse } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import locationApi from '../../apis/locationApi'
import { AddressForm } from '../../helpers/myHomes/Address.helper'
import { ILocationApi } from '../../interfaces/apis/LocationApi.interface'

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

  const getAddress = async (zipCode: string) => {
    try {
      const {
        data: { features },
      }: AxiosResponse<ILocationApi> = await locationApi.get(`/${zipCode}.json`)
      const city =
        features[0].context.find((item) => item.id.split('.')[0] === 'place')
          ?.text || ''
      const state =
        features[0].context.find((item) => item.id.split('.')[0] === 'region')
          ?.text || ''
      setInputs({
        ...inputs,
        city,
        state,
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (inputs.zipCode.length === 5) {
      getAddress(inputs.zipCode)
    }
  }, [inputs.zipCode])

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
