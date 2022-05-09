import { Box, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import DetailsTab from '../../components/sendCommunication/DetailsTab'
import AddMedia from '../../components/sendCommunication/AddMedia'
import { imagesDb } from '../sendCommunication/AddMedia.helper'
import { useEffect, useState } from 'react'

const AddMediaContent = () => {
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsUploading(true)
    }, 20000)
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
    component: (
      <Box p="base" w="full" h="100vh" bg="white">
        <Text>{t('createDocument.tabs.tab3')}</Text>
      </Box>
    ),
  },
]
