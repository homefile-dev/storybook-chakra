import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ResetPassword } from '../../components/pages/ResetPassword'
import { IEmailForm } from '../../interfaces/pages/ResetPassword.interface'

export default {
  title: 'Pages/Onboarding',
  component: ResetPassword,
} as ComponentMeta<typeof ResetPassword>

const Template: ComponentStory<typeof ResetPassword> = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <ResetPassword
      isLoading={isLoading}
      termsUrl=""
      privacyUrl=""
      handleReset={(form: IEmailForm) => {
        setHasError(false)
        setIsLoading(true)
        setTimeout(() => {
          if (form.email !== 'user@user.com') {
            setHasError(true)
            setIsLoading(false)
          } else {
            setIsLoading(false)
          }
        }, 2000)
      }}
      handleSignIn={() => {}}
      resetError={hasError}
    />
  )
}

export const ResetPasswordPage = Template.bind({})
