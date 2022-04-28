import { DrawerBody, DrawerContent, DrawerHeader } from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import { ProgressReport } from '../../assets/images'
import { t } from 'i18next'
import CreateDocumentHeader from './CreateDocumentHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'
import { ICreateDocumentContent } from '../../interfaces/sendCommunication/CreateDocumentContent.interface'

export const CreateDocumentContent = ({
  handleDateRange,
  handleSelectHome,
  homes = null,
  initialHome = null,
  onCloseButton,
}: ICreateDocumentContent) => {
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={onCloseButton}
          icon={ProgressReport}
          title={t('createDocument.title')}
        />
      </DrawerHeader>
      <DrawerBody p="0">
        <CreateDocumentHeader
          handleDateRange={(date) => handleDateRange && handleDateRange(date)}
          handleSelectHome={(form) =>
            handleSelectHome && handleSelectHome(form)
          }
          homes={homes}
          initialHome={initialHome}
        />
        <TabsHeader tabList={createDocList} />
      </DrawerBody>
    </DrawerContent>
  )
}

export default CreateDocumentContent
