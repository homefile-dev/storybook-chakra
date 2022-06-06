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
  handleEditFileName: (id: string) => void
  uploading?: boolean
}

export const Files = ({ files, handleEditFileName, uploading }: FilesI) => {
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
        ({ isNew, isShared, name, type, uploaded, updatedAt, _id }, index) => {
          const titleFormatted = name.split('.')[0]
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
                type={name.split('.').pop() || type}
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
        children={<FileDetail handleEditFileName={handleEditFileName} />}
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="md"
      />
    </Wrap>
  )
}
