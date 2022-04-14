import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import House from '../../assets/images/house.svg'
import MyHomesHeader from './headers/MyHomesHeader'
import HomeCard from './HomeCard'
import { IMyHomes } from '../../interfaces/myHomes/MyHomes.interface'

export const MyHomes = ({
  cardFilters,
  cardList,
  cardMenuItems = [],
  handleCardClick,
  handleNewHomeClick,
  headerMenuItems,
}: IMyHomes) => {
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
      <SimpleGrid
        columns={[1, 2, null, 4, 5]}
        spacing="grid.sm"
        px="4"
        alignItems="start"
      >
        {cardList &&
          cardList.map(({ address, active, _id, image, name }) => (
            <Container>
              <ContainerHeader
                menuItems={cardMenuItems}
                icon={<CustomIcon type={FiMoreHorizontal} size="5" />}
                isThin
              />
              <Box
                key={_id}
                as="button"
                textAlign="left"
                onClick={() => {
                  handleCardClick(_id)
                }}
              >
                <HomeCard
                  address={address}
                  image={image}
                  name={name}
                  active={active}
                  _id={_id}
                />
              </Box>
            </Container>
          ))}
      </SimpleGrid>
    </Container>
  )
}

export default MyHomes
