import {
  Box
} from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect, useState } from 'react'
import { AddMedia } from '../../components/sendCommunication'
import { imagesDb } from '../../helpers/sendCommunication/AddMedia.helper'

export default {
  title: 'Components/SendCommunication',
  component: AddMedia,
} as ComponentMeta<typeof AddMedia>

const Template: ComponentStory<typeof AddMedia> = () => {
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
    <Box w={['full', 'md']}>
      <AddMedia
        handleDelete={(image) => image}
        handleEdit={(image) => image}
        handleUpload={(images) => images}
        images={imagesDb}
        uploading={isUploading}
      />
    </Box>
  )
}

export const AddMediaComponent = Template.bind({})
