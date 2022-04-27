import { DrawerBody, DrawerContent, DrawerHeader } from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import { ProgressReport } from '../../assets/images'
import { t } from 'i18next'
import CreateDocumentHeader from './CreateDocumentHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'

export const CreateDocumentContent = ({
  onCloseButton,
}: {
  onCloseButton: () => void
}) => {
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
        <CreateDocumentHeader />
        <TabsHeader tabList={createDocList} />
      </DrawerBody>
    </DrawerContent>
  )
}

export default CreateDocumentContent
