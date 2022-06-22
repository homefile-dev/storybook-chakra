import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeCard from '../../components/homeBoard/HomeCard'
import { HomeCards } from '../../helpers/myHomes'
import { recipientsDb } from '../../helpers/sendCommunication/AddRecipient.helper'

export default {
  title: 'Components/HomeBoard',
  component: HomeCard,
} as ComponentMeta<typeof HomeCard>

const Template: ComponentStory<typeof HomeCard> = () => {
  const { name, image, address } = HomeCards[0]
  return (
    <Box maxW="24rem" minW="20rem">
      <HomeCard
        edit
        city={address.city}
        name={name}
        mail="user@user.com.br"
        streetAddress={address.street}
        state={address.state}
        zip={address.zip}
        imageUrl={image}
      />
    </Box>
  )
}

export const HomeCardComponent = Template.bind({})
