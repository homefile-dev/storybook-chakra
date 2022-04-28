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
    <Box w="60%">
      <CreateDocumentHeader
        handleDateRange={(date) => console.log(date)}
        handleSelectHome={(form) => console.log(form)}
        homes={SelectHomes}
        initialHome={SelectHomes[0].name}
      />
    </Box>
  )
}

export const CreateDocumentHeaderComponent = Template.bind({})
