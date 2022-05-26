import { useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { AddHomeContent, MyHomes } from '../myHomes'
import { Header, LeftPanel, Masthead } from '.'
import {
  MyHomeMenuItems,
  UserMenuItems,
} from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards, MyHomeFilters } from '../../helpers/myHomes'
import { MenuItems } from '../../helpers/myHomes/HomeCard.helper'
import RightPanel from './RightPanel'
import SendCommunication from '../sendCommunication/SendCommunication'
import CreateDocumentContent from '../sendCommunication/CreateDocumentContent'
import { t } from 'i18next'
import { Document, Proposal, ProgressReport } from '../../assets/images'
import { CreateDocument } from '../../helpers/launchpad/Documents.helper'
import { CreateDocumentHeaderI } from '../../interfaces/sendCommunication/CreateDocumentHeader.interface'
import { SelectHomes } from '../../helpers/inputs/SelectInput.helper'

export const Launchpad = () => {
  const [homes, setHomes] = useState<CreateDocumentHeaderI>(CreateDocument)
  const userName = 'Adam Lee'
  const firstName = userName.split(' ')[0]
  const {
    isOpen: isLeftOpen,
    onOpen: onLeftOpen,
    onClose: onLeftClose,
  } = useDisclosure()
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()
  const documents = [
    {
      label: t('createDocument.menuItems.proposal'),
      icon: Proposal,
      active: false,
      onClick: () => {},
    },
    {
      label: t('createDocument.menuItems.progressReport'),
      icon: ProgressReport,
      active: false,
      onClick: () => {},
    },
    {
      label: t('createDocument.menuItems.publicTemplate'),
      icon: Document,
      onClick: () => {
        onRightOpen()
        setHomes({
          handleDateRange: (date) => date,
          handleSelectHome: (form) => {},
          homes: SelectHomes,
          initialHome: SelectHomes[0].name,
        })
      },
    },
  ]
  useEffect(() => {
    onLeftOpen()
  }, [])
  return (
    <Box w="full">
      <LeftPanel
        children={
          <AddHomeContent
            handleSkipClick={onLeftClose}
            userFirstName={firstName}
            handleCreateHomeClick={(form) => form}
            isFirstHome
          />
        }
        isOpen={isLeftOpen}
        onClose={onLeftOpen}
      />
      <RightPanel
        children={
          <CreateDocumentContent
            handleDateRange={homes.handleDateRange}
            handleSelectHome={homes.handleSelectHome}
            homes={homes.homes}
            initialHome={homes.initialHome as string}
            onCloseButton={onRightClose}
          />
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="lg"
      />
      <Masthead userName={userName} menuItems={UserMenuItems} />
      <Box px={[0, 'base']}>
        <Header firstName={firstName} />
        <Flex
          direction={['column-reverse', 'row']}
          gap="base"
          w="full"
          px={[0, 'base']}
        >
          <Box w={['full', null, '60%', '70%']}>
            <MyHomes
              cardFilters={MyHomeFilters}
              cardList={HomeCards}
              cardMenuItems={MenuItems}
              handleCardClick={(id) => {
                onRightOpen()
                setHomes({
                  ...homes,
                  initialHome: null,
                })
              }}
              handleNewHomeClick={onLeftOpen}
              headerMenuItems={MyHomeMenuItems}
            />
          </Box>
          <Box w={['full', null, '40%', '30%']}>
            <SendCommunication documentList={documents} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Launchpad
