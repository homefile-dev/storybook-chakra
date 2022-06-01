import {
  Box,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Stack,
  Wrap,
} from '@chakra-ui/react'
import { t } from 'i18next'
import {
  FolderDetailI,
  FolderFileI,
} from '../../interfaces/homeBoard/FolderDetail.interface'
import { PanelHeader, SectionHeader } from '../headers'
import { BlueFolder, HomeAddress, VioletFolder } from '../../assets/images'
import { DragDropArea } from '../dragDrop/DragDropArea'
import { useFolderDetail } from '../../hooks/homeBoard/useFolderDetail'
import { DragDropLoading } from '../dragDrop/DragDropLoading'
import { FolderFile } from './FolderFile'
import { FooterDrawer, FooterButtons } from '../footers'
import { useState, useMemo, useEffect } from 'react'

export const FolderDetail = ({
  files,
  folder,
  handleClose,
  handleDelete,
  handleUpload = () => {},
  loading,
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

  const filesMapped = (
    <Wrap>
      {acceptedFiles?.map(
        (
          { isNew, isShared, name, menu, type, uploaded, updatedAt, _id },
          index
        ) => {
          return (
            <Box key={_id + index}>
              <FolderFile
                handleClick={(id) => id}
                isNew={isNew}
                isShared={isShared}
                menu={menu || []}
                title={name}
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
    </Wrap>
  )
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleClose}
          icon={folder?.isNew ? VioletFolder : BlueFolder}
          title={folder?.type || ''}
        />
      </DrawerHeader>
      <DrawerBody p="base">
        <Stack spacing="base" w="full" bg="white" p="base" h="100%">
          <SectionHeader
            title={t('folderSharing.details.title')}
            titleIcon={HomeAddress}
          />
          <DragDropArea
            btnText={t('folderSharing.details.add')}
            errorMessage={errorMessage}
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            hasError={hasError}
            height="8rem"
            message={t('folderSharing.details.dragDropMessage')}
          />
          <DragDropLoading children={filesMapped} isLoading={loading} />
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
