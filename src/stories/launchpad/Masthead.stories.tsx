import { ComponentMeta, ComponentStory } from '@storybook/react'
import Masthead from '../../components/launchpad/Masthead'
import { UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'

export default {
  title: 'Components/Launchpad',
  component: Masthead,
} as ComponentMeta<typeof Masthead>

const Template: ComponentStory<typeof Masthead> = () => {
  return <Masthead userName="Adam Lee" menuItems={UserMenuItems} />
}

export const MastheadComponent = Template.bind({})
