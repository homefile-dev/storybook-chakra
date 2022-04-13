import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import House from '../../assets/images/house.svg'
import MyHomesHeader from './headers/MyHomesHeader'
import HomeCard from './HomeCard'
import { IMyHome } from '../../interfaces/myHomes/MyHome.interface'

export const MyHomes = ({
  cardFilters,
  cardList,
  handleCardClick,
  handleNewHomeClick,
  headerMenuItems,
}: IMyHome) => {
  return (
    <Container variant="launchpad" minW="full" pb="3rem">
      <ContainerHeader
        title={t('myHomes.title')}
        titleIcon={House}
        menuItems={headerMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <MyHomesHeader
        cardFilters={cardFilters}
        handleNewHomeClick={handleNewHomeClick}
      />
      <SimpleGrid columns={[1, 2, null, 4, 5]} spacing="grid.sm" px="4">
        {cardList &&
          cardList.map(
            ({ address, cardMenuItems, city, id, imageUrl, title, state }) => (
              <Box key={id}>
                <HomeCard
                  address={address}
                  cardMenuItems={cardMenuItems}
                  city={city}
                  handleCardClick={handleCardClick}
                  id={id}
                  imageUrl={imageUrl}
                  title={title}
                  state={state}
                />
              </Box>
            )
          )}
      </SimpleGrid>
    </Container>
  )
}

export default MyHomes
