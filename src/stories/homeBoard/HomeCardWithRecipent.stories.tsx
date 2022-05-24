import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeCardWithRecipent from '../../components/homeBoard/HomeCardWithRecipent'
import { HomeCards } from '../../helpers/myHomes'
import { recipientsDb } from '../../helpers/sendCommunication/AddRecipient.helper'

export default {
  title: 'Components/HomeBoard',
  component: HomeCardWithRecipent,
} as ComponentMeta<typeof HomeCardWithRecipent>

const Template: ComponentStory<typeof HomeCardWithRecipent> = () => {
  return (
    <HomeCardWithRecipent
      address={HomeCards[0].address}
      handleEdit={(id) => id}
      _id={HomeCards[0]._id}
      image={HomeCards[0].image}
      name={HomeCards[0].name}
      menu={[
        {
          label: 'Edit',
          handleClick: (form) => console.log(form),
        },
      ]}
      recipients={recipientsDb}
    />
  )
}

export const HomeCardWithRecipentComponent = Template.bind({})
