import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { SignUp } from '../../components/pages/SignUp'
import { ISignUpForm } from '../../interfaces/pages/SignUp.interface'

export default {
  title: 'Pages/Onboarding',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const valuesFilled = {
    email: 'user@user.com',
    firstName: 'Adam',
    lastName: 'Lee',
  }
  return (
    <SignUp
      isLoading={isLoading}
      handleCreateAccount={(form: ISignUpForm) => {
        setHasError(false)
        setIsLoading(true)
        setTimeout(() => {
          if (form.email === 'user@user.com') {
            setHasError(true)
            setIsLoading(false)
          } else {
            setIsLoading(false)
          }
        }, 2000)
      }}
      handleSignIn={() => {}}
      privacyUrl=""
      signupError={hasError}
      termsUrl=""
      values={valuesFilled}
    />
  )
}

export const SignUpPage = Template.bind({})
