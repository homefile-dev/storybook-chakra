import { Box } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ResetPassword } from '../../../components/onboarding/pages/ResetPassword'
import { EmailFormI } from '../../../interfaces/pages/ResetPassword.interface'

export default {
  title: 'Pages/Onboarding',
  component: ResetPassword,
} as ComponentMeta<typeof ResetPassword>

const Template: ComponentStory<typeof ResetPassword> = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Box>
      <ResetPassword
        isLoading={isLoading}
        handleReset={(form: EmailFormI) => {
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
    </Box>
  )
}

export const ResetPasswordPage = Template.bind({})
