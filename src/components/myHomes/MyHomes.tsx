import { Container, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import House from '../../assets/images/house.svg'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import MyHomesHeader from './headers/MyHomesHeader'
import HomeCard from './HomeCard'

export const MyHomes = ({ handleHomeBt }: { handleHomeBt: () => void }) => {
  return (
    <Container variant="launchpad" minW="full" minH="30rem">
      <ContainerHeader
        title={t('myHomes.title')}
        titleIcon={House}
        menuItems={MyHomeMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <MyHomesHeader handleHomeBt={handleHomeBt} />
      <SimpleGrid columns={5} spacing="grid.sm" px="4">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </SimpleGrid>
    </Container>
  )
}

export default MyHomes
