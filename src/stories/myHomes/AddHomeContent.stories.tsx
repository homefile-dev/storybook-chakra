import { Drawer, useDisclosure } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import AddHomeContent from '../../components/myHomes/AddHomeContent'
import { formValues } from '../../helpers/myHomes/AddHome.helper'

export default {
  title: 'Components/MyHomes',
  component: AddHomeContent,
} as ComponentMeta<typeof AddHomeContent>

const Template: ComponentStory<typeof AddHomeContent> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <AddHomeContent
        handleCreateHomeClick={() => {}}
        handleSkipClick={onClose}
        userFirstName="Adam"
        values={formValues}
      />
    </Drawer>
  )
}

export const AddHomeContentComponent = Template.bind({})
