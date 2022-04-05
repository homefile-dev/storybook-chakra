import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from '../../components/launchpad/Header'

export default {
  title: 'Components/Launchpad',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  return <Header firstName="Adam" handleViews={() => {}} />
}

export const HeaderComponent = Template.bind({})
