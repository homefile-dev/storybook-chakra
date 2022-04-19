import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import House from '../../assets/images/house.svg'
import MyHomesHeader from './headers/MyHomesHeader'
import HomeCard from './HomeCard'
import { IMyHomes } from '../../interfaces/myHomes/MyHomes.interface'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const MyHomes = ({
  cardFilters,
  cardList,
  cardMenuItems = [],
  handleCardClick,
  handleNewHomeClick,
  headerMenuItems,
}: IMyHomes) => {
  const { width } = useWindowDimensions()
  const isSmallMobile = width < 400
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
        columns={[isSmallMobile ? 1 : 2, 2, 3, 4, 5]}
        spacing="grid.sm"
        px="4"
        alignItems="start"
      >
        {cardList &&
          cardList?.map(({ address, active, _id, image, name }) => (
            <Container key={_id}>
              <ContainerHeader
                menuItems={cardMenuItems}
                icon={<CustomIcon type={FiMoreHorizontal} size="5" />}
                isThin
              />
              <Box
                key={_id}
                as="button"
                textAlign="left"
                transition="all 0.3s ease-in-out"
                onClick={() => {
                  handleCardClick(_id)
                }}
                _hover={{
                  boxShadow: 'xl',
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
