import { Container } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../launchpad/ContainerHeader'
import House from '../../assets/images/house.svg'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import MyHomesHeader from './MyHomesHeader'

export const MyHomes = () => {
  return (
    <Container variant="tertiary" minW="full" h="30rem">
      <ContainerHeader
        title={t('myHomes.title')}
        titleIcon={House}
        menuItems={MyHomeMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <MyHomesHeader />
    </Container>
  )
}

export default MyHomes
