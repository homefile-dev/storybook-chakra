import { AxiosResponse } from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import locationApi from '../../apis/locationApi'
import { AddressForm } from '../../helpers/myHomes/Address.helper'
import { ILocationApi } from '../../interfaces/apis/LocationApi.interface'
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
      console.error('Error to get address', err)
    }
  }

  useEffect(() => {
    if (addressInputs.zip.length === 5) {
      getAddress(addressInputs.zip)
    }
  }, [addressInputs.zip])

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
