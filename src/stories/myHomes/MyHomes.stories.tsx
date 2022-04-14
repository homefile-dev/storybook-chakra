import { ComponentMeta, ComponentStory } from '@storybook/react'
import MyHomes from '../../components/myHomes/MyHomes'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards, MyHomeFilters } from '../../helpers/myHomes'
import { MenuItems } from '../../helpers/myHomes/HomeCard.helper'

export default {
  title: 'Components/MyHomes',
  component: MyHomes,
} as ComponentMeta<typeof MyHomes>

const Template: ComponentStory<typeof MyHomes> = () => {
  return (
    <MyHomes
      cardList={HomeCards}
      cardMenuItems={MenuItems}
      handleCardClick={() => {}}
      headerMenuItems={MyHomeMenuItems}
      cardFilters={MyHomeFilters}
      handleNewHomeClick={() => {}}
    />
  )
}

export const MyHomesComponent = Template.bind({})
