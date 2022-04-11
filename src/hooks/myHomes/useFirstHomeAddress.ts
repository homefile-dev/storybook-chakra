import { AxiosResponse } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import locationApi from '../../apis/locationApi'
import { AddressForm } from '../../helpers/myHomes/Address.helper'
import { ILocationApi } from '../../interfaces/apis/LocationApi.interface'
import { IFirstHome } from '../../interfaces/myHomes/FirstHome.interface'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'

export const useFirstHomeAddress = () => {
  const [addressInputs, setAddressInputs] = useState(AddressForm)
  const [counter, setCounter] = useState(0)
  const [complements, setComplements] = useState<string[]>([])
  const label = 'address'

  const handleAddComplements = () => {
    setCounter(counter + 1)
    counter < 2 &&
      setComplements([`${label}${counter + 1}`, ...complements].reverse())
  }

  const handleDeleteComplements = (complement: string) => {
    setCounter(counter - 1)
    if (counter >= 0) {
      setComplements(complements.filter((item) => item !== complement))
      setAddressInputs({
        ...addressInputs,
        [complement]: '',
      })
      firstHomeProxy[complement as keyof IFirstHome] = ''
    }
  }

  const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInputs({
      ...addressInputs,
      [event.target.id]: event.target.value,
    })
    firstHomeProxy[event.target.id as keyof IFirstHome] = event.target.value
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
      setAddressInputs({
        ...addressInputs,
        city,
        state,
      })
      firstHomeProxy.city = city
      firstHomeProxy.state = state
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (addressInputs.zipCode.length === 5) {
      getAddress(addressInputs.zipCode)
      firstHomeProxy.zipCode = addressInputs.zipCode
    }
  }, [addressInputs.zipCode])

  return {
    complements,
    counter,
    handleAddressInputChange,
    handleAddComplements,
    handleDeleteComplements,
    addressInputs,
  }
}

export default useFirstHomeAddress
