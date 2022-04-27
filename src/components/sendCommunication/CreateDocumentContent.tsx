import { DrawerBody, DrawerContent, DrawerHeader } from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import Report from '../../assets/images/progress-report.svg'
import { t } from 'i18next'
import { useState } from 'react'
import CreateDocumentHeader from './CreateDocumentHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'

export const CreateDocumentContent = () => {
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={() => {}}
          icon={Report}
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
