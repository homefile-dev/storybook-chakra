import { ComponentMeta, ComponentStory } from '@storybook/react'
import LeftPanel from '../../components/launchpad/LeftPanel'
import FirstHomeContent from '../../components/myHomes/firstHome/FirstHomeContent'
import { IFirstHome } from '../../interfaces/myHomes/FirstHome.interface'

export default {
  title: 'Components/Launchpad',
  component: LeftPanel,
} as ComponentMeta<typeof LeftPanel>

const Template: ComponentStory<typeof LeftPanel> = () => {
  return (
    <LeftPanel
      children={
        <FirstHomeContent
          handleCreateHomeClick={(form: IFirstHome) => {}}
          handleSkipClick={() => {}}
          userFirstName='Adam'
        />
      }
      isOpen
      onClose={() => {}}
    />
  )
}

export const LeftPanelComponent = Template.bind({})
