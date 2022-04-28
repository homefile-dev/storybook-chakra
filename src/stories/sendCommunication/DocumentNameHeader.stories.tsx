import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import DocumentNameHeader from '../../components/sendCommunication/DocumentNameHeader'

export default {
  title: 'Components/SendCommunication',
  component: DocumentNameHeader,
} as ComponentMeta<typeof DocumentNameHeader>

const Template: ComponentStory<typeof DocumentNameHeader> = () => {
  const [projectName, setProjectName] = useState(
    'Progress Report  - Jan 12-16 2022'
  )
  return (
    <Box w="60%" bg="white" p="6">
      <DocumentNameHeader
        handleChange={(event) => {
          setProjectName(event.target.value)
        }}
        value={projectName}
      />
    </Box>
  )
}

export const DocumentNameHeaderComponent = Template.bind({})
