import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Stack,
} from '@chakra-ui/react'
import { t } from 'i18next'
import {
  FolderDetailI,
  FolderFileI,
} from '../../interfaces/homeBoard/FolderDetail.interface'
import { PanelHeader } from '../headers'
import { BlueFolder, VioletFolder, YellowFolder } from '../../assets/images'
import { DragDropArea } from '../dragDrop/DragDropArea'
import { useFolderDetail } from '../../hooks/homeBoard/useFolderDetail'
import { DragDropLoading } from '../dragDrop/DragDropLoading'
import { FooterDrawer, FooterButtons } from '../footers'
import { useState, useMemo, useEffect } from 'react'
import { SortHeader } from './SortHeader'
import { Files } from './Files'

export const FolderDetail = ({
  files,
  folder,
  handleClose,
  handleEditDescription,
  handleEditFileName,
  handleAddRecipient,
  handleDelete,
  handleDeleteRecipient,
  handleUpload = () => {},
  loading,
  panelSize = 'md',
  uploading,
}: FolderDetailI) => {
  const {
    acceptedFiles,
    errorMessage,
    getRootProps,
    getInputProps,
    handleMapFile,
    hasError,
    setAcceptedFiles,
    setTotalFiles,
    setIsUploading,
    totalFiles,
  } = useFolderDetail()

  const [dbFiles, setDbFiles] = useState<FolderFileI[]>([])

  useMemo(() => {
    setDbFiles(handleMapFile({ files, isLocal: false }))
  }, [files])

  useEffect(() => {
    setTotalFiles([...dbFiles, ...acceptedFiles])
  }, [acceptedFiles, dbFiles])

  useEffect(() => {
    handleUpload(acceptedFiles)
  }, [acceptedFiles])

  useEffect(() => {
    setIsUploading(uploading)
    !uploading && setAcceptedFiles([])
  }, [uploading])


  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleClose}
          icon={
            folder?.isNew
              ? VioletFolder
              : folder?.isShared
              ? BlueFolder
              : YellowFolder
          }
          title={folder?.type || ''}
        />
      </DrawerHeader>
      <SortHeader />
      <DrawerBody p="0" bg="white">
        <Stack spacing="4" w="full" p="base" h="100%">
          <DragDropArea
            errorMessage={errorMessage}
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            hasError={hasError}
          />
          <DragDropLoading
            children={
              <Files
                files={totalFiles}
                handleAddRecipient={handleAddRecipient}
                handleEditDescription={handleEditDescription}
                handleEditFileName={handleEditFileName}
                handleDeleteRecipient={handleDeleteRecipient}
                panelSize={panelSize}
                uploading={uploading}
              />
            }
            isLoading={loading}
          />
        </Stack>
      </DrawerBody>
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons
              button3={{
                buttonStyle: 'secondaryFooter',
                label: t('folderSharing.details.delete'),
                onClick: () => handleDelete(folder.type),
              }}
            />
          }
          isOpen
        />
      </DrawerFooter>
    </DrawerContent>
  )
}

export default FolderDetail
