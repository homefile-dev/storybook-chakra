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
import { RoomsMenu } from '../rooms/RoomsMenu'
import { RoomsList } from '../../helpers/rooms/RoomsList'

export const HomeBoard = () => {
  const homeName = 'The Edmunds'
  const userName = 'John Doe'
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()

  const [selectedFolder, setSelectedFolder] = useState<FolderI>({
    isNew: false,
    isShared: false,
    subTypes: [],
    type: '',
  })

  return (
    <Box w="full">
      <RightPanel
        children={
          <FolderDetail
            addedBy="First name and last name"
            folder={selectedFolder}
            handleAddRecipient={(email) => email}
            handleClose={onRightClose}
            handleDeleteFile={(id) => id}
            handleDeleteFolder={(id) => id}
            handleDeleteRecipient={(email) => email}
            handleEditDescription={(file) => file}
            handleEditFileName={(file) => file}
            handleFileClick={(file) => file}
            handleOpenFile={(file) => file}
            files={fileDB}
            handleUpload={() => {}}
            loading={false}
            panelSize="md"
            recipients={[
              {
                firstName: 'John',
                lastName: 'Doe',
                email: 'user@user.com',
                phone: '32329099',
              },
            ]}
            uploading={false}
          />
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="md"
      />
      <Flex>
        <RoomsMenu rooms={RoomsList} />
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
      </Flex>
    </Box>
  )
}

export default HomeBoard
