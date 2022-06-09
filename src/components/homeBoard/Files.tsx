import { Wrap, Box, useDisclosure } from '@chakra-ui/react'
import { RightPanel } from '../launchpad/RightPanel'
import { FileDetail } from './FileDetail'
import { File } from './File'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'
import { t } from 'i18next'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { FolderFileI } from '../../interfaces/homeBoard/FolderDetail.interface'
import { fileRecipientProxy } from '../../proxies/fileRecipient.proxy'

interface FilesI {
  files: FolderFileI[]
  handleAddRecipient: (email: string) => void
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  panelSize?: string
  uploading?: boolean
}

export const Files = ({
  files,
  handleAddRecipient,
  handleEditDescription,
  handleEditFileName,
  handleDeleteRecipient,
  panelSize,
  uploading,
}: FilesI) => {
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()

  folderHeaderProxy.handleCloseButton = onRightClose

  const fileMenu = [
    {
      label: t('folderSharing.menu.details'),
      handleClick: (form: any) => {
        onRightOpen()
        fileDetailProxy.name = form.name
        fileDetailProxy.addedAt = form.updatedAt.replace(' ', ' @ ')
        fileDetailProxy.icon = form.icon
        fileDetailProxy._id = form._id
      },
    },
  ]

  return (
    <Wrap>
      {files?.map(
        (
          {
            description,
            _id,
            isNew,
            isShared,
            name,
            recipients,
            type,
            uploaded,
            updatedAt,
          },
          index
        ) => {
          const titleFormatted = name.split('.')[0]
          fileRecipientProxy.recipients = recipients
          fileDetailProxy.description = description
          return (
            <Box key={_id + index}>
              <File
                handleClick={(id) => {
                  //TODO: implement click
                }}
                handleEditFileName={handleEditFileName}
                isNew={isNew}
                isShared={isShared}
                menu={fileMenu}
                title={titleFormatted}
                type={type}
                updatedAt={updatedAt}
                uploaded={uploaded}
                uploading={uploading}
                _id={_id}
              />
            </Box>
          )
        }
      )}
      <RightPanel
        children={
          <FileDetail
            handleAddRecipient={handleAddRecipient}
            handleEditDescription={handleEditDescription}
            handleEditFileName={handleEditFileName}
            handleDeleteRecipient={handleDeleteRecipient}
          />
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size={panelSize}
      />
    </Wrap>
  )
}
