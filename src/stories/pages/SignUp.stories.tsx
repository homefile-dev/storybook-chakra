import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignUp } from '../../components/pages/SignUp'
import { ISignUpForm } from '../../interfaces/SignUp.interface'

export default {
  title: 'Pages/Onboarding',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = () => (
  <SignUp
    termsUrl="https://www.google.com"
    privacyUrl="https://www.google.com"
    handleCreateAccount={(form: ISignUpForm) => console.log(form)}
    handleSignIn={() => console.log('sign in')}
  />
)

export const SignUpPage = Template.bind({})
