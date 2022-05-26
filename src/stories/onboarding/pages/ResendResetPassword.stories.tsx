import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import ResendResetPassword from '../../../components/onboarding/pages/ResendResetPassword'

export default {
  title: 'Pages/Onboarding',
  component: ResendResetPassword,
} as ComponentMeta<typeof ResendResetPassword>

const Template: ComponentStory<typeof ResendResetPassword> = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Box>
      <ResendResetPassword
        email="user@user.com.br"
        isLoading={isLoading}
        handleResendBt={() => {
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }}
      />
    </Box>
  )
}

export const ResendResetPasswordPage = Template.bind({})
