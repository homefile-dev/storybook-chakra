import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ThreeButtonsFooter from '../../components/footers/ThreeButtonsFooter'
import { ButtonsFooter } from '../../helpers/footers/ThreeButtonsFooter.helper'

export default {
  title: 'Components/Footers',
  component: ThreeButtonsFooter,
} as ComponentMeta<typeof ThreeButtonsFooter>

const Template: ComponentStory<typeof ThreeButtonsFooter> = () => {
  return (
    <Box w="60%" bg="white" p="6">
      <ThreeButtonsFooter
        button1={ButtonsFooter.button1}
        button2={ButtonsFooter.button2}
        button3={ButtonsFooter.button3}
      />
    </Box>
  )
}

export const ThreeButtonsFooterComponent = Template.bind({})
