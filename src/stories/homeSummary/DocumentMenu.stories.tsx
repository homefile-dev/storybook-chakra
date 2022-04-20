import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DocumentMenu from '../../components/homeSummary/DocumentMenu'
import { documents } from '../../helpers/homeSummary/DocumentList.helper'

export default {
  title: 'Components/HomeSummary',
  component: DocumentMenu,
} as ComponentMeta<typeof DocumentMenu>

const Template: ComponentStory<typeof DocumentMenu> = () => {
  return (
    <Box w="25rem">
      <DocumentMenu documents={documents} title="Create document" />
    </Box>
  )
}

export const DocumentMenuComponent = Template.bind({})
