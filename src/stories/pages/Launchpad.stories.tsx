import { ComponentMeta, ComponentStory } from '@storybook/react'
import Launchpad from '../../components/pages/Launchpad'

export default {
  title: 'Pages/Launchpad',
  component: Launchpad,
} as ComponentMeta<typeof Launchpad>

const Template: ComponentStory<typeof Launchpad> = () => {
  return (
    <Launchpad />
  )
}

export const LaunchpadBase = Template.bind({})
