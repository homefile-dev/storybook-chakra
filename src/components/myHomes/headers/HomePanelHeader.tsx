import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { VscClose } from 'react-icons/vsc'
import { t } from 'i18next'
import House from '../../../assets/images/house.svg'
import { CustomIcon } from '../../icons/CustomIcon'
import { IHomePanelHeader } from '../../../interfaces/myHomes/HomePanelHeader.interface'

export const HomePanelHeader = ({
  handleCloseButton,
  icon = House,
  title = t('myHomes.newHome.title'),
}: IHomePanelHeader) => {
  return (
    <Flex justify="space-between" bg="white" p="4" alignItems="center">
      <Flex gap="4" w="full">
        <Image src={icon} alt={t('myHomes.newHome.title')} w="auto" h="20px" />
        <Text fontWeight="regular">{title}</Text>
      </Flex>
      <IconButton
        variant="menuIcon"
        aria-label={t('myHomes.newHome.btAria')}
        maxW="fit-content"
        onClick={handleCloseButton}
        icon={<CustomIcon type={VscClose} size="9" />}
      />
    </Flex>
  )
}

export default HomePanelHeader
