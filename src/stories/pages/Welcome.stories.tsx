import { ComponentMeta, ComponentStory } from '@storybook/react'
import Welcome from '../../components/pages/Welcome'

export default {
  title: 'Pages/Onboarding',
  component: Welcome,
} as ComponentMeta<typeof Welcome>

const Template: ComponentStory<typeof Welcome> = () => {
  return (
    <Welcome
      name="Sam"
      handleClick={() => {}}
      videoUrl="https://www.youtube.com/embed/rkt_YtZYRDI"
    />
  )
}

export const WelcomePage = Template.bind({})
