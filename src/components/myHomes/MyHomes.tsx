import { Box, Container, SimpleGrid, Wrap } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import House from '../../assets/images/house.svg'
import MyHomesHeader from './headers/MyHomesHeader'
import HomeCard from './HomeCard'
import { MyHomesI } from '../../interfaces/myHomes/MyHomes.interface'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const MyHomes = ({
  cardFilters,
  cardList = [],
  cardMenuItems = [],
  handleCardClick,
  handleNewHomeClick,
  headerMenuItems,
}: MyHomesI) => {
  const { width } = useWindowDimensions()
  const isSmallMobile = width < 400
  return (
    <Container variant="launchpad" maxW="63rem" pb="3rem">
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
      <Wrap spacing="base" px="base" alignItems="start">
        {cardList &&
          cardList?.map(({ address, active, _id, image, name }) => (
            <Container key={_id} w="179px">
              <ContainerHeader
                menuItems={cardMenuItems}
                itemForm={{ _id, name }}
                icon={<CustomIcon type={FiMoreHorizontal} size="5" />}
                isThin
              />
              <Box
                key={_id}
                as="button"
                w="179px"
                textAlign="left"
                transition="all 0.3s ease-in-out"
                onClick={() => {
                  handleCardClick({ _id, name })
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
      </Wrap>
    </Container>
  )
}

export default MyHomes
