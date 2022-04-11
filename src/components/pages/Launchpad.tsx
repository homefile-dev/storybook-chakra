import { useEffect } from 'react'
import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import FirstHomeContent from '../myHomes/firstHome/FirstHomeContent'
import { Header } from '../launchpad/Header'
import LeftPanel from '../launchpad/LeftPanel'
import Masthead from '../launchpad/Masthead'
import MyHomes from '../myHomes/MyHomes'
import SendDocument from '../sendDocument/SendDocument'
import { UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'

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
          <FirstHomeContent
            handleSkipClick={onClose}
            userFirstName={firstName}
            handleCreateHomeClick={(form) => console.log(form)}
          />
        }
        isOpen={isOpen}
        onClose={onClose}
      />
      <Masthead userName={userName} menuItems={UserMenuItems} />
      <Header handleViews={() => {}} firstName={firstName} />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(10, 1fr)']}
        gap="2"
        w="full"
        px="4"
      >
        <GridItem colSpan={[1, 7]} w="full">
          <MyHomes handleHomeBt={onOpen} />
        </GridItem>
        <GridItem colSpan={[1, 3]} w="full">
          <SendDocument />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Launchpad
