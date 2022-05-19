import {
  Box
} from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { RecipientTab } from '../../components/sendCommunication'
import { recipientsDb } from '../../helpers/sendCommunication/AddRecipient.helper'

export default {
  title: 'Components/SendCommunication',
  component: RecipientTab,
} as ComponentMeta<typeof RecipientTab>

const Template: ComponentStory<typeof RecipientTab> = () => {
  const [recipients, setRecipients] = useState(recipientsDb)
  return (
    <Box w={['full', 'md']}>
      <RecipientTab
        handleAdd={(email: string) => {
          setRecipients([
            ...recipients,
            { email, firstName: '', lastName: '', phone: '' },
          ])
        }}
        handleRemove={(email: string) =>
          setRecipients(
            recipients.filter((recipient) => recipient.email !== email)
          )
        }
        loading={false}
        recipients={recipients}
      />
    </Box>
  )
}

export const RecipientTabComponent = Template.bind({})
