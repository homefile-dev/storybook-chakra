import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import { ProgressReport } from '../../assets/images'
import { t } from 'i18next'
import CreateDocumentHeader from './CreateDocumentHeader'
import { createDocList } from '../../helpers/headers/TabHeader.helper'
import { ICreateDocumentContent } from '../../interfaces/sendCommunication/CreateDocumentContent.interface'
import DocumentNameHeader from './DocumentNameHeader'
import { useState } from 'react'
import { FooterDrawer } from '../footers/FooterDrawer'
import FooterButtons from '../footers/FooterButtons'
import { ButtonsFooter } from '../../helpers/footers/FooterButtons.helper'
import RightPanel from '../launchpad/RightPanel'
import { DocumentPreview } from './DocumentPreview'
import { documentDB } from '../../helpers/sendCommunication/DocumentPreview.helper'

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

  const { isOpen, onOpen, onClose } = useDisclosure()

  const button3 = {
    buttonStyle: 'secondaryFooter',
    label: t('createDocument.buttons.preview'),
    onClick: onOpen,
  }

  const { companyInfo, date, document, form, home, images, userInfo } =
    documentDB

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
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons button1={ButtonsFooter.button1} button3={button3} />
          }
          isOpen={true}
        />
      </DrawerFooter>
      <RightPanel
        children={
          <DocumentPreview
            companyInfo={companyInfo}
            date={date}
            document={document}
            form={form}
            handleClose={onClose}
            handleSend={() => {}}
            home={home}
            images={images}
            userInfo={userInfo}
          />
        }
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      />
    </DrawerContent>
  )
}

export default CreateDocumentContent
