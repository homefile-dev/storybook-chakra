import { Box, Button, Container } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../launchpad/ContainerHeader'
import SendDoc from '../../assets/images/send.svg'
import { MyHomeMenuItems } from '../../helpers/launchpad/MenuItems.helper'

export const SendDocument = () => {
  return (
    <Container variant="launchpad" minW="full">
      <ContainerHeader
        title={t('sendDocument.title')}
        titleIcon={SendDoc}
        menuItems={MyHomeMenuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box w="full" p="4">
        <Button variant="secondary">{t('sendDocument.setupBt')}</Button>
      </Box>
    </Container>
  )
}

export default SendDocument