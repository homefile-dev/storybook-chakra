import { useEffect } from 'react'
import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { AddHomeContent, MyHomes } from '../myHomes'
import { Header, LeftPanel, Masthead } from '../launchpad'
import {
  MyHomeMenuItems,
  UserMenuItems,
} from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards, MyHomeFilters } from '../../helpers/myHomes'
import { MenuItems } from '../../helpers/myHomes/HomeCard.helper'
import RightPanel from '../launchpad/RightPanel'
import SendCommunication from '../sendCommunication/SendCommunication'
import CreateDocumentContent from '../sendCommunication/CreateDocumentContent'
import { documents } from '../../helpers/homeSummary/DocumentList.helper'

export const Launchpad = () => {
  const userName = 'Adam Lee'
  const firstName = userName.split(' ')[0]
  const {
    isOpen: isLeftOpen,
    onOpen: onLeftOpen,
    onClose: onLeftClose,
  } = useDisclosure()
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()
  useEffect(() => {
    onLeftOpen()
  }, [])
  return (
    <Box w="full">
      <LeftPanel
        children={
          <AddHomeContent
            handleSkipClick={onLeftClose}
            userFirstName={firstName}
            handleCreateHomeClick={(form) => console.log(form)}
            isFirstHome
          />
        }
        isOpen={isLeftOpen}
        onClose={onLeftOpen}
      />
      <RightPanel
        children={<CreateDocumentContent />}
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="lg"
      />
      <Masthead userName={userName} menuItems={UserMenuItems} />
      <Box px="base">
        <Header firstName={firstName} />
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
              handleNewHomeClick={onLeftOpen}
              headerMenuItems={MyHomeMenuItems}
            />
          </GridItem>
          <GridItem colSpan={[1, 3]} w="full">
            <SendCommunication documentList={documents}  />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Launchpad
