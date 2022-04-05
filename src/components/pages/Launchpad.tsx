import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Header } from '../launchpad/Header'
import Masthead from '../launchpad/Masthead'
import MyHomes from '../myHomes/MyHomes'


export const Launchpad = () => {
  const userName = 'Adam Lee'
  const firstName = userName.split(' ')[0]
  return (
    <Box w="full">
      <Masthead userName={userName} />
      <Header handleViews={() => {}} firstName={firstName} />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(8, 1fr)']}
        gap="2"
        w="full"
        px="4"
      >
        <GridItem colSpan={[1, 6]} w="full">
          <MyHomes />
        </GridItem>
        <GridItem colSpan={[1, 2]} w="full"></GridItem>
      </Grid>
    </Box>
  )
}

export default Launchpad
