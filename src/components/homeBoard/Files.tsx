import { Wrap, Box, useDisclosure } from '@chakra-ui/react'
import { RightPanel } from '../launchpad/RightPanel'
import { FileDetail } from './FileDetail'
import { File } from './File'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'
import { t } from 'i18next'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { FolderFileI } from '../../interfaces/homeBoard/FolderDetail.interface'

interface FilesI {
  files: FolderFileI[]
  handleAddRecipient: (email: string) => void
  handleDeleteFile: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
  handleFileClick: (id: string) => void
  panelSize?: string
  uploading?: boolean
}

export const Files = ({
  files,
  handleAddRecipient,
  handleDeleteFile,
  handleDeleteRecipient,
  handleEditDescription,
  handleEditFileName,
  handleFileClick,
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
        handleFileClick(fileDetailProxy._id)
      },
    },
    {
      label: t('folderSharing.menu.delete'),
      handleClick: (form: any) => {
        fileDetailProxy._id = form._id
        handleDeleteFile(fileDetailProxy._id)
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
            title,
            type,
            uploaded,
            updatedAt,
          },
          index
        ) => {
          const titleFormatted = title?.split('.')[0]
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
