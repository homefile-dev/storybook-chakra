import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { VscClose } from 'react-icons/vsc'
import { t } from 'i18next'

import { CustomIcon } from '../icons/CustomIcon'
import { PanelHeaderI } from '../../interfaces/headers/PanelHeader.interface'

export const PanelHeader = ({
  handleCloseButton,
  icon = '',
  title = '',
}: PanelHeaderI) => {
  return (
    <Flex justify="space-between" bg="white" px="4" py="2" alignItems="center">
      <Flex gap="4" w="full">
        <Image src={icon} alt={title} w="24px" h="auto" />
        <Text fontWeight="regular">{title}</Text>
      </Flex>
      <IconButton
        variant="menuIconWithShadow"
        aria-label={t('myHomes.newHome.btAria')}
        maxW="fit-content"
        onClick={handleCloseButton}
        icon={<CustomIcon type={VscClose} size="10" />}
      />
    </Flex>
  )
}

export default PanelHeader
