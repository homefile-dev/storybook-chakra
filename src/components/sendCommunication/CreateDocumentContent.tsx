import { DrawerBody, DrawerContent, DrawerHeader } from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import { ProgressReport } from '../../assets/images'
import { t } from 'i18next'
import CreateDocumentHeader from './CreateDocumentHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'
import { ICreateDocumentContent } from '../../interfaces/sendCommunication/CreateDocumentContent.interface'
import DocumentNameHeader from './DocumentNameHeader'
import { useState } from 'react'

export const CreateDocumentContent = ({
  handleDateRange,
  handleSelectHome,
  homes = null,
  initialHome = null,
  onCloseButton,
}: ICreateDocumentContent) => {
  const [projectName, setProjectName] = useState(
    'Progress Report  - Jan 12-16 2022'
  )
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
        <DocumentNameHeader
          handleChange={(event) => {
            setProjectName(event.target.value)
          }}
          value={projectName}
        />
        <TabsHeader tabList={createDocList} />
      </DrawerBody>
    </DrawerContent>
  )
}

export default CreateDocumentContent
