import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CreateDocumentHeader from '../../components/sendCommunication/CreateDocumentHeader'
import { SelectHomes } from '../../helpers/inputs/SelectInput.helper'

export default {
  title: 'Components/SendCommunication',
  component: CreateDocumentHeader,
} as ComponentMeta<typeof CreateDocumentHeader>

const Template: ComponentStory<typeof CreateDocumentHeader> = () => {
  return (
    <Box w="60%" bg="white" p="6">
      <CreateDocumentHeader
        handleDateRange={(date) => date}
        handleSelectHome={(form) => {}}
        homes={SelectHomes}
        initialHome={SelectHomes[0].name}
      />
    </Box>
  )
}

export const CreateDocumentHeaderComponent = Template.bind({})
