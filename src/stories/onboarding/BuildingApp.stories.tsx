import { ComponentMeta, ComponentStory } from '@storybook/react'
import BuildingApp from '../../components/loaders/BuildingApp'

export default {
  title: 'Components/Onboarding',
  component: BuildingApp,
} as ComponentMeta<typeof BuildingApp>

const Template: ComponentStory<typeof BuildingApp> = () => {
  return (
    <BuildingApp />
  )
}

export const BuildingAppLoader = Template.bind({})
