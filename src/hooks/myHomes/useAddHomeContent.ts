import { ChangeEvent, useState } from 'react'
import { firstHomeProxy } from '../../proxies/firstHome.proxy'

export const useAddHouseContent = () => {
  const [projectIdentifier, setProjectIdentifier] = useState('')
  const [isValidated, setIsValidated] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setProjectIdentifier(event.target.value)
    firstHomeProxy.name = event.target.value
  }

  return {
    handleInputChange,
    isValidated,
    projectIdentifier,
    setIsValidated,
    setProjectIdentifier,
  }
}

export default useAddHouseContent
