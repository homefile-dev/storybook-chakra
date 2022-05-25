import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeHeader from '../../components/homeBoard/HomeHeader'

export default {
  title: 'Components/HomeBoard',
  component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>

const Template: ComponentStory<typeof HomeHeader> = () => {
  return <HomeHeader homeName="The Edmunds" handleClick={() => {}} />
}

export const HomeHeaderComponent = Template.bind({})
