import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignUp } from '../../components/pages/SignUp'

export default {
  title: 'Pages/Onboarding',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = () => <SignUp />

export const SignUpPage = Template.bind({})