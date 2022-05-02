import { Box, Container } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import SendDoc from '../../assets/images/send.svg'
import { ISendCommunication } from '../../interfaces/sendCommunication/SendCommunication.interface'
import { DocumentMenu } from '../homeSummary'

export const SendCommunication = ({
  documentList,
  headerList,
  isDisabled = false,
}: ISendCommunication) => {
  return (
    <Container variant="launchpad" minW="full">
      <ContainerHeader
        title={t('sendCommunication.title')}
        titleIcon={SendDoc}
        menuItems={headerList}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box w="full" p="4">
        <DocumentMenu
          documents={documentList}
          title={t('sendCommunication.btLabel')}
        />
      </Box>
    </Container>
  )
}

export default SendCommunication
