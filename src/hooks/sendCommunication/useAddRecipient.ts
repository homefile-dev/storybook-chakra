import { t } from 'i18next'
import { ChangeEvent, useState } from 'react'
import { RecipientI } from '../../interfaces/sendCommunication/AddRecipient.interface'

export const useAddRecipient = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [recipients, setRecipients] = useState<RecipientI[]>([])
  const [hasError, setHasError] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    setEmail(event.target.value)
  }

  const handleAddLocal = (email: string) => {
    setRecipients([
      ...recipients,
      { email, firstName: '', lastName: '', phone: '' },
    ])
    setEmail('')
  }

  const handleRemoveLocal = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index))
  }

  const isUniqueEmail = (email: string) => {
    const isUnique = recipients.every((recipient) => recipient.email !== email)
    if (!isUnique) {
       setHasError(true)
      setErrorMessage(t('addRecipient.errorDuplicate'))
    }
    return isUnique
  }

  return {
    email,
    errorMessage,
    handleAddLocal,
    handleChange,
    hasError,
    handleRemoveLocal,
    isUniqueEmail,
    recipients,
    setEmail,
    setHasError,
    setRecipients,
  }
}
