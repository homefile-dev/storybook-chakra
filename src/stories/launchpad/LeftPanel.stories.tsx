import { useDisclosure } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import LeftPanel from '../../components/launchpad/LeftPanel'
import AddHomeContent from '../../components/myHomes/AddHomeContent'
import { formValues } from '../../helpers/myHomes/AddHome.helper'
import { IHomeForm } from '../../interfaces/myHomes/Home.interface'

export default {
  title: 'Components/Launchpad',
  component: LeftPanel,
} as ComponentMeta<typeof LeftPanel>

const Template: ComponentStory<typeof LeftPanel> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])
  return (
    <LeftPanel
      children={
        <AddHomeContent
          handleCreateHomeClick={(form: IHomeForm) => {}}
          handleSkipClick={onClose}
          userFirstName="Adam"
          values={formValues}
        />
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  )
}

export const LeftPanelComponent = Template.bind({})
