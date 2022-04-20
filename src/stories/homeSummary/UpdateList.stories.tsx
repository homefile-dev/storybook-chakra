import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import UpdateList from '../../components/homeSummary/UpdateList'

export default {
  title: 'Components/HomeSummary',
  component: UpdateList,
} as ComponentMeta<typeof UpdateList>

const Template: ComponentStory<typeof UpdateList> = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <Box w="30rem">
      <UpdateList
        documentType="Progress Report"
        isOpened={isOpened}
        handleProjectClick={() => setIsOpened(!isOpened)}
        projectName="The Edmunds"
        updatedAt="08.05"
      />
    </Box>
  )
}

export const UpdateListComponent = Template.bind({})
