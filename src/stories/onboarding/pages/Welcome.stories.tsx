import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Welcome from '../../../components/onboarding/pages/Welcome'

export default {
  title: 'Pages/Onboarding',
  component: Welcome,
} as ComponentMeta<typeof Welcome>

const Template: ComponentStory<typeof Welcome> = () => {
  return (
    <Box>
      <Welcome
        name="Sam"
        handleClick={() => {}}
        videoUrl="https://www.youtube.com/embed/rkt_YtZYRDI"
      />
    </Box>
  )
}

export const WelcomePage = Template.bind({})
