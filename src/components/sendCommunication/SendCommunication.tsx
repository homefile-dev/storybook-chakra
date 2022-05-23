import { Box, Container } from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import ContainerHeader from '../headers/ContainerHeader'
import SendDoc from '../../assets/images/send.svg'
import { SendCommunicationI } from '../../interfaces/sendCommunication/SendCommunication.interface'
import { DocumentMenu } from '../homeSummary'

export const SendCommunication = ({
  documentList,
  headerList,
  isDisabled = false,
}: SendCommunicationI) => {
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
          isDisabled={isDisabled}
          title={t('sendCommunication.btLabel')}
        />
      </Box>
    </Container>
  )
}

export default SendCommunication
