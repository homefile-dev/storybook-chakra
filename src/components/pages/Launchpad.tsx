import { Box, Grid, GridItem } from '@chakra-ui/react'
import FirstHomeContent from '../firstHome/FirstHomeContent'
import { Header } from '../launchpad/Header'
import LeftPanel from '../launchpad/LeftPanel'
import Masthead from '../launchpad/Masthead'
import MyHomes from '../myHomes/MyHomes'
import SendDocument from '../sendDocument/SendDocument'


export const Launchpad = () => {
  const userName = 'Adam Lee'
  const firstName = userName.split(' ')[0]
  return (
    <Box w="full">
      <LeftPanel child={<FirstHomeContent />} />
      <Masthead userName={userName} />
      <Header handleViews={() => {}} firstName={firstName} />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(10, 1fr)']}
        gap="2"
        w="full"
        px="4"
      >
        <GridItem colSpan={[1, 7]} w="full">
          <MyHomes />
        </GridItem>
        <GridItem colSpan={[1, 3]} w="full">
          <SendDocument />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Launchpad
