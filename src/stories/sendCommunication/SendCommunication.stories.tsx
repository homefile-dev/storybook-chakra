import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SendCommunication from '../../components/sendCommunication/SendCommunication'
import { documents } from '../../helpers/homeSummary/DocumentList.helper'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'

export default {
  title: 'Components/SendCommunication',
  component: SendCommunication,
} as ComponentMeta<typeof SendCommunication>

const Template: ComponentStory<typeof SendCommunication> = () => {
  return (
    <Box w="25rem">
      <SendCommunication
        documentList={documents}
        headerList={MyHomeMenuItems}
      />
    </Box>
  )
}

export const SendCommunicationComponent = Template.bind({})
