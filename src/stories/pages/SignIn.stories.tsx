import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { SignIn } from '../../components/pages/SignIn'
import { ISignInForm } from '../../interfaces/pages/SignIn.interface'

export default {
  title: 'Pages/Onboarding',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <SignIn
      isLoading={isLoading}
      termsUrl=""
      privacyUrl=""
      handleSignIn={(form: ISignInForm) => {
        setHasError(false)
        setIsLoading(true)
        setTimeout(() => {
          if (form.email !== 'user@user.com' || form.password !== 'password') {
            setHasError(true)
            setIsLoading(false)
          } else {
            setIsLoading(false)
          }
        }, 2000)
      }}
      handleSignUp={() => {}}
      handleForgotPassword={() => {}}
      loginError={hasError}
    />
  )
}

export const SignInPage = Template.bind({})
