import { Box } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { NewPassword } from '../../../components/onboarding/pages/NewPassword'
import { NewPasswordFormI } from '../../../interfaces/pages/NewPassword.interface'

export default {
  title: 'Pages/Onboarding',
  component: NewPassword,
} as ComponentMeta<typeof NewPassword>

const Template: ComponentStory<typeof NewPassword> = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Box>
      <NewPassword
        isLoading={isLoading}
        userEmail="user@user.com"
        handleReset={(form: NewPasswordFormI) => {
          setHasError(false)
          setIsLoading(true)
          setTimeout(() => {
            if (form.password !== form.confirmPassword) {
              setHasError(true)
              setIsLoading(false)
            } else {
              setIsLoading(false)
            }
          }, 2000)
        }}
      />
    </Box>
  )
}

export const NewPasswordPage = Template.bind({})
