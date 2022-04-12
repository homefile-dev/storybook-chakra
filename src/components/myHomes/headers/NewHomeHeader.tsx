import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { VscClose } from 'react-icons/vsc'
import { t } from 'i18next'
import House from '../../../assets/images/house.svg'
import { CustomIcon } from '../../icons/CustomIcon'

export const NewHomeHeader = () => {
  return (
    <Flex justify="space-between" bg="white" p="4" alignItems="center">
      <Flex gap="4" w="full">
        <Image src={House} alt={t('myHomes.newHome.title')} w="auto" h="20px" />
        <Text fontWeight="regular">{t('myHomes.newHome.title')}</Text>
      </Flex>
      <IconButton
        variant="menuIcon"
        aria-label={t('myHomes.newHome.btAria')}
        maxW="fit-content"
        icon={<CustomIcon type={VscClose} size="8" />}
      />
    </Flex>
  )
}

export default NewHomeHeader
