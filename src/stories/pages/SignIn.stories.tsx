import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { SignIn } from '../../components/pages/SignIn'
import { ISignInForm } from '../../interfaces/SignIn.interface'

export default {
  title: 'Pages/Onboarding',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = () => {
  const [hasError, setHasError] = useState(false)
  return (
    <SignIn
      termsUrl=""
      privacyUrl=""
      handleSignIn={(form: ISignInForm) => {
        if (form.email !== 'user@user.com' || form.password !== 'password') {
          setHasError(true)
        } else {
          setHasError(false)
        }
      }}
      handleSignUp={() => {}}
      handleForgotPassword={() => {}}
      loginError={hasError}
    />
  )
}

export const SignInPage = Template.bind({})
