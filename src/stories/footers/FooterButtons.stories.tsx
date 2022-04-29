import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import FooterButtons from '../../components/footers/FooterButtons'
import { ButtonsFooter } from '../../helpers/footers/FooterButtons.helper'

export default {
  title: 'Components/Footers',
  component: FooterButtons,
} as ComponentMeta<typeof FooterButtons>

const Template: ComponentStory<typeof FooterButtons> = () => {
  return (
    <Box w="60%" bg="white" p="6">
      <FooterButtons
        button1={ButtonsFooter.button1}
        button2={ButtonsFooter.button2}
        button3={ButtonsFooter.button3}
      />
    </Box>
  )
}

export const FooterButtonsComponent = Template.bind({})
