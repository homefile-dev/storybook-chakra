import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { SignUp } from '../../components/pages/SignUp'
import { ISignUpForm } from '../../interfaces/SignUp.interface'

export default {
  title: 'Pages/Onboarding',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = () => {
  const [hasError, setHasError] = useState(false)
  return (
    <SignUp
      handleCreateAccount={(form: ISignUpForm) => {
        if (form.email === 'user@user.com') {
          setHasError(true)
        } else {
          setHasError(false)
        }
      }}
      handleSignIn={() => {}}
      privacyUrl=""
      signupError={hasError}
      termsUrl=""
    />
  )
}

export const SignUpPage = Template.bind({})
