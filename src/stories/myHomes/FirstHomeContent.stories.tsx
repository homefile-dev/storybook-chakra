import { Drawer, useDisclosure } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import FirstHomeContent from '../../components/myHomes/firstHome/FirstHomeContent'

export default {
  title: 'Components/MyHomes',
  component: FirstHomeContent,
} as ComponentMeta<typeof FirstHomeContent>

const Template: ComponentStory<typeof FirstHomeContent> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <FirstHomeContent
        handleCreateHomeClick={() => {}}
        handleSkipClick={() => onClose()}
        userFirstName="Adam"
      />
    </Drawer>
  )
}

export const FirstHomeContentComponent = Template.bind({})
