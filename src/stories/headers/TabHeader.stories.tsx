import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TabsHeader from '../../components/headers/TabsHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'

export default {
  title: 'Components/Headers',
  component: TabsHeader,
} as ComponentMeta<typeof TabsHeader>

const Template: ComponentStory<typeof TabsHeader> = () => {
  return (
    <Box w="50%">
      <TabsHeader tabList={createDocList} />
    </Box>
  )
}

export const TabsHeaderComponent = Template.bind({})
