import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Image,
  Box,
  Text,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  Stack,
  Progress,
} from '@chakra-ui/react'
import { SectionHeader } from '../headers'
import { HomeAddress } from '../../assets/images'
import { useAddMedia } from '../../hooks/sendCommunication/useAddMedia'
import { t } from 'i18next'
import { TextInput } from '../inputs'
import {
  AddMediaI,
  ImagesI,
} from '../../interfaces/sendCommunication/AddMedia.interface'
import { useEffect, useMemo, useState } from 'react'
import { DragDropArea } from '../dragDrop/DragDropArea'
import { DragDropLoading } from '../dragDrop/DragDropLoading'

export const AddMedia = ({
  handleDelete,
  handleEdit,
  handleOpen,
  handleUpload,
  images = [],
  loading = false,
  uploading,
}: AddMediaI) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    acceptedFiles,
    errorMessage,
    getInputProps,
    getRootProps,
    handleDescription,
    handleEditDescription,
    handleMapMedia,
    handleNext,
    handlePrevious,
    handleSaveDescription,
    hasError,
    index,
    removeFile,
    setAcceptedFiles,
    setIndex,
    setIsUploading,
    setTotalFiles,
    storageUrl,
    totalFiles,
    urlModal,
  } = useAddMedia()

  const [dbImages, setDbImages] = useState<ImagesI[]>([])

  useMemo(() => {
    setDbImages(handleMapMedia({ files: images, isLocal: false }))
  }, [images])

  useEffect(() => {
    setTotalFiles([...dbImages, ...acceptedFiles])
  }, [acceptedFiles, dbImages])

  useEffect(() => {
    handleUpload(acceptedFiles)
  }, [acceptedFiles])

  useEffect(() => {
    setIsUploading(uploading)
    !uploading && setAcceptedFiles([])
  }, [uploading])

  const thumbs = totalFiles.map((file: ImagesI, index: number) => {
    const {
      bucketName,
      description,
      editing,
      extension,
      fileName,
      _id,
      imageUrl,
      name,
      uploaded,
    } = file
    const url = `${storageUrl}/${bucketName}/${fileName}.${extension}`
    return (
      <Flex key={name || _id || index} gap="base" align="start">
        <Box position="relative" w="8rem">
          <CloseButton
            onClick={() => {
              removeFile(name || _id)
              handleDelete(_id)
            }}
            disabled={uploading}
            size="sm"
            zIndex="docked"
            position="absolute"
            bg="container.tertiary"
            borderRadius="full"
            right="-2"
            top="-2"
            _hover={{
              bg: 'container.secondary',
            }}
          />
          <Button
            variant="ghost"
            onClick={
              handleOpen
                ? () => handleOpen(file)
                : () => {
                    onOpen()
                    setIndex(index)
                  }
            }
          >
            <Image src={imageUrl || url} boxSize="6rem" objectFit="cover" />
          </Button>
        </Box>
        <Stack w="100%">
          <Flex w="100%" gap="base">
            {file.editing ? (
              <TextInput
                handleChange={(event) =>
                  handleDescription(name || _id, event.target.value)
                }
                id={name || _id}
                placeholder={t('addMedia.description')}
                value={description}
              />
            ) : (
              <Text w="100%">{description}</Text>
            )}
            <Button
              disabled={!description || uploading}
              variant="tertiary"
              h="input.md"
              onClick={() => {
                if (editing) {
                  handleSaveDescription(name || _id)
                  handleEdit(file)
                } else {
                  handleEditDescription(name || _id)
                }
              }}
            >
              {editing ? 'Add' : 'Edit'}
            </Button>
          </Flex>
          {uploading && !uploaded && <Progress size="xs" isIndeterminate />}
        </Stack>
      </Flex>
    )
  })

  return (
    <Stack spacing="6" w="full" bg="white" p="base" mb="6rem">
      <Stack spacing="base">
        <SectionHeader title={t('addMedia.title')} titleIcon={HomeAddress} />
        <DragDropArea
          errorMessage={errorMessage}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          hasError={hasError}
        />
      </Stack>
      <DragDropLoading children={thumbs} isLoading={loading} />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="6" my="6" justify="center">
              <Button
                variant="icon"
                maxW="fit-content"
                onClick={handlePrevious}
                disabled={index === 0}
              >
                <ChevronLeftIcon w="10" h="10" />
              </Button>
              <Stack>
                <Image
                  src={totalFiles[index]?.imageUrl || urlModal}
                  boxSize="26rem"
                  objectFit="cover"
                />
                <Text>{totalFiles[index]?.description}</Text>
              </Stack>
              <Button
                variant="icon"
                maxW="fit-content"
                onClick={handleNext}
                disabled={index === totalFiles.length - 1}
              >
                <ChevronRightIcon w="10" h="10" />
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  )
}

export default AddMedia
