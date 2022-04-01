import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import ActivateAccount from '../../components/pages/ActivateAccount'

export default {
  title: 'Pages/Onboarding',
  component: ActivateAccount,
} as ComponentMeta<typeof ActivateAccount>

const Template: ComponentStory<typeof ActivateAccount> = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <ActivateAccount
      name="Matthew"
      isLoading={isLoading}
      handleActivateBt={() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }}
    />
  )
}

export const ActivateAccountPage = Template.bind({})
