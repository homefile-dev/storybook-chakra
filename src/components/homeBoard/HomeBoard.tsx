import { Box, Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards } from '../../helpers/myHomes'
import { SendCommunication } from '../sendCommunication/SendCommunication'
import { RightPanel } from '../launchpad/RightPanel'
import { Masthead } from '../launchpad'
import { HomeHeader } from './HomeHeader'
import { HomeCardWithRecipent } from './HomeCardWithRecipent'
import { recipientsDb } from '../../helpers/sendCommunication/AddRecipient.helper'
import {
  fileDB,
  FoldersDB,
  selectOptions,
} from '../../helpers/homeBoard/FolderSharing.helper'
import { FolderSharing } from './FolderSharing'
import { FolderDetail } from './FolderDetail'
import { FolderI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { useState } from 'react'

export const HomeBoard = () => {
  const homeName = 'The Edmunds'
  const userName = 'John Doe'
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()

  const [selectedFolder, setSelectedFolder] = useState<FolderI>({
    subTypes: [],
    type: '',
  })

  return (
    <Box w="full">
      <RightPanel
        children={
          <FolderDetail
            folder={selectedFolder}
            handleAddRecipient={(email) => email}
            handleClose={onRightClose}
            handleDeleteRecipient={(email) => email}
            handleEditDescription={(id) => id}
            handleEditFileName={(id) => id}
            files={fileDB}
            handleDelete={(id) => {
              onRightClose()
            }}
            handleUpload={() => {}}
            loading={false}
            panelSize="md"
            uploading={false}
          />
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="md"
      />
      <Stack spacing="base">
        <Masthead userName={userName} menuItems={UserMenuItems} />
        <Stack px={[0, 'base']} spacing="base">
          <HomeHeader handleClick={() => {}} homeName={homeName} />
          <Flex direction={['column-reverse', 'row']} gap="base" w="full">
            <HomeCardWithRecipent
              address={HomeCards[0].address}
              handleEdit={(id) => id}
              _id={HomeCards[0]._id}
              image={HomeCards[0].image}
              name={HomeCards[0].name}
              menu={[
                {
                  label: 'Edit',
                  handleClick: (form) => form,
                },
              ]}
              recipients={recipientsDb}
            />
            <Flex
              direction={[
                'column-reverse',
                'column-reverse',
                'column-reverse',
                'row',
              ]}
              gap="base"
              w="full"
            >
              <FolderSharing
                folders={FoldersDB}
                handleFolderClick={(folder) => {
                  setSelectedFolder(folder)
                  onRightOpen()
                }}
                handleSelect={() => {}}
                initialSelectItem={selectOptions[0]}
                menuItems={[
                  {
                    label: 'Edit',
                    handleClick: () => {},
                  },
                ]}
                selectItems={selectOptions}
              />
              <SendCommunication documentList={[]} />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomeBoard
