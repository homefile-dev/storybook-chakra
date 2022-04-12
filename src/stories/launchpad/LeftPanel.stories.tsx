import { ComponentMeta, ComponentStory } from '@storybook/react'
import LeftPanel from '../../components/launchpad/LeftPanel'
import AddHomeContent from '../../components/myHomes/AddHomeContent'
import { formValues } from '../../helpers/myHomes/AddHome.helper'
import { IHomeForm } from '../../interfaces/myHomes/Home.interface'

export default {
  title: 'Components/Launchpad',
  component: LeftPanel,
} as ComponentMeta<typeof LeftPanel>

const Template: ComponentStory<typeof LeftPanel> = () => {
  return (
    <LeftPanel
      children={
        <AddHomeContent
          handleCreateHomeClick={(form: IHomeForm) => {}}
          handleSkipClick={() => {}}
          userFirstName="Adam"
          values={formValues}
        />
      }
      isOpen
      onClose={() => {}}
    />
  )
}

export const LeftPanelComponent = Template.bind({})
