import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProjectList from '../../components/homeSummary/ProjectList'

export default {
  title: 'Components/HomeSummary',
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>

const Template: ComponentStory<typeof ProjectList> = () => {
  return (
    <Box w="30rem">
      <ProjectList
        menuItems={[]}
        title="Project Name"
        handleProjectClick={() => {}}
      />
    </Box>
  )
}

export const MastheadComponent = Template.bind({})
