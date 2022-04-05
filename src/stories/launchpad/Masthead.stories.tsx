import { ComponentMeta, ComponentStory } from '@storybook/react'
import Masthead from '../../components/launchpad/Masthead'

export default {
  title: 'Components/Launchpad',
  component: Masthead,
} as ComponentMeta<typeof Masthead>

const Template: ComponentStory<typeof Masthead> = () => {
  return (
    <Masthead userName="Adam Lee" />
  )
}

export const MastheadComponent = Template.bind({})
