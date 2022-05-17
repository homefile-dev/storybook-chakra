import { ChangeEvent, useState } from 'react'
import { RecipientI } from '../../interfaces/sendCommunication/AddRecipient.interface'

export const useAddRecipient = () => {
  const [email, setEmail] = useState('')
  const [recipients, setRecipients] = useState<RecipientI[]>([])
  const [isError, setIsError] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsError(false)
    setEmail(event.target.value)
  }

  const handleAddLocal = () => {
    if (email !== '') {
      setRecipients([...recipients, { email }])
      setEmail('')
    }
  }

  const handleRemoveLocal = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index))
  }

  return {
    email,
    handleAddLocal,
    handleChange,
    handleRemoveLocal,
    isError,
    recipients,
    setEmail,
    setIsError,
    setRecipients,
  }
}
