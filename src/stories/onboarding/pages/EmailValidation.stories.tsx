import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import EmailValidation from '../../../components/onboarding/pages/EmailValidation'

export default {
  title: 'Pages/Onboarding',
  component: EmailValidation,
} as ComponentMeta<typeof EmailValidation>

const Template: ComponentStory<typeof EmailValidation> = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Box>
      <EmailValidation
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

export const EmailValidationPage = Template.bind({})
