import { t } from 'i18next'
import DetailsTab from '../../components/sendCommunication/DetailsTab'
import AddMedia from '../../components/sendCommunication/AddMedia'
import { imagesDb } from '../sendCommunication/AddMedia.helper'
import { useEffect, useState } from 'react'
import RecipientTab from '../../components/sendCommunication/RecipientTab'
import { recipientsDb } from '../sendCommunication/AddRecipient.helper'

const AddMediaContent = () => {
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsUploading(true)
    }, 20000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsUploading(false)
    }, 25000)
  }, [])

  return (
    <AddMedia
      handleDelete={(image) => image}
      handleEdit={(image) => image}
      handleUpload={(images) => images}
      images={imagesDb}
      uploading={isUploading}
    />
  )
}

const AddRecipientContent = () => {
  const [recipients, setRecipients] = useState(recipientsDb)
  return (
    <RecipientTab
      handleAdd={(email: string) => {
        setRecipients([
          ...recipients,
          { email, firstName: '', lastName: '', phone: '' },
        ])
      }}
      handleRemove={(email: string) =>
        setRecipients(
          recipients.filter((recipient) => recipient.email !== email)
        )
      }
      loading={false}
      recipients={recipients}
    />
  )
}

export const createDocList = [
  {
    label: t('createDocument.tabs.tab1'),
    component: <DetailsTab />,
  },
  {
    label: t('createDocument.tabs.tab2'),
    component: <AddMediaContent />,
  },
  {
    label: t('createDocument.tabs.tab3'),
    component: <AddRecipientContent />,
  },
]
