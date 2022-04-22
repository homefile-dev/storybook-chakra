import { useEffect } from 'react'
import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { AddHomeContent, MyHomes } from '../myHomes'
import { Header, LeftPanel, Masthead } from '../launchpad'
import SendDocument from '../sendDocument/SendDocument'
import { MyHomeMenuItems, UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards, MyHomeFilters } from '../../helpers/myHomes'
import { MenuItems } from '../../helpers/myHomes/HomeCard.helper'

export const Launchpad = () => {
  const userName = 'Adam Lee'
  const firstName = userName.split(' ')[0]
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])
  return (
    <Box w="full">
      <LeftPanel
        children={
          <AddHomeContent
            handleSkipClick={onClose}
            userFirstName={firstName}
            handleCreateHomeClick={(form) => console.log(form)}
            isFirstHome
          />
        }
        isOpen={isOpen}
        onClose={onClose}
      />
      <Masthead userName={userName} menuItems={UserMenuItems} />
      <Box px="base">
        <Header handleViews={() => {}} firstName={firstName} />
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(10, 1fr)']}
          gap="base"
          w="full"
          px="base"
        >
          <GridItem colSpan={[1, 7]} w="full">
            <MyHomes
              cardFilters={MyHomeFilters}
              cardList={HomeCards}
              cardMenuItems={MenuItems}
              handleCardClick={(id) => id}
              handleNewHomeClick={onOpen}
              headerMenuItems={MyHomeMenuItems}
            />
          </GridItem>
          <GridItem colSpan={[1, 3]} w="full">
            <SendDocument />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Launchpad
