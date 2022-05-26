import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeBoard from '../../components/homeBoard/HomeBoard'

export default {
  title: 'Pages/HomeBoard',
  component: HomeBoard,
} as ComponentMeta<typeof HomeBoard>

const Template: ComponentStory<typeof HomeBoard> = () => {
  return <HomeBoard />
}

export const HomeBoardComponent = Template.bind({})
