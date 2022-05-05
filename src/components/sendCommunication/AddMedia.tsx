import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Image,
  Box,
  Center,
  Container,
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
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'
import { TextInput } from '../inputs'
import { IImages } from '../../interfaces/sendCommunication/AddMedia.interface'

const AddMedia = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    index,
    setIndex,
    handleNext,
    handlePrevious,
    removeFile,
    isMobile,
    handleDescription,
    handleSaveDescription,
    handleEditDescription,
    hasError,
    errorMessage,
  } = useAddMedia()

  const thumbs = acceptedFiles.map((file: IImages, index: number) => (
    <Flex key={file.name} gap="base" align="start">
      <Box position="relative" w="8rem">
        <CloseButton
          onClick={() => removeFile(file.name)}
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
          onClick={() => {
            onOpen()
            setIndex(index)
          }}
        >
          {file?.type?.split('/')[0] === 'image' ? (
            <Image src={file.location} boxSize="6rem" objectFit="cover" />
          ) : (
            <video src={file.location} />
          )}
        </Button>
      </Box>
      <Stack w="100%">
        <Flex w="100%" gap="base">
          {file.editing ? (
            <TextInput
              handleChange={(event) =>
                handleDescription(file.name, event.target.value)
              }
              id={file.name}
              placeholder={'Enter description'}
              value={file.description}
            />
          ) : (
            <Text w="100%">{file.description}</Text>
          )}
          <Button
            disabled={!file.description}
            variant="secondary"
            maxW="fit-content"
            maxH="input.md"
            onClick={() => {
              if (file.editing) {
                handleSaveDescription(file.name)
              } else {
                handleEditDescription(file.name)
              }
            }}
          >
            {file.editing ? 'Add' : 'Edit'}
          </Button>
        </Flex>
        {!file.uploaded && <Progress size="xs" isIndeterminate />}
      </Stack>
    </Flex>
  ))

  return (
    <Stack spacing="base" w="full" bg="white" p="base" mb="6rem">
      <SectionHeader title={t('addMedia.title')} titleIcon={HomeAddress} />
      <Container variant="dragDrop" minW="full" {...getRootProps()}>
        <input {...getInputProps()} />
        {isMobile ? (
          <Button
            leftIcon={
              <CustomIcon type={HiOutlinePlus} color="white" size="7" />
            }
          >
            {t('addMedia.addBtn')}
          </Button>
        ) : (
          <Center h="10rem">
            <Text variant="info">{t('addMedia.dragDrop')}</Text>
          </Center>
        )}
      </Container>
      {hasError && <Text variant="error">{errorMessage}</Text>}
      <Stack gap="base">{thumbs}</Stack>
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
                {acceptedFiles[index]?.type?.split('/')[0] === 'image' ? (
                  <Image
                    src={acceptedFiles[index].location}
                    boxSize="26rem"
                    objectFit="cover"
                  />
                ) : (
                  <video width="500" controls>
                    <source src={acceptedFiles[index]?.location} />
                  </video>
                )}
                <Text>{acceptedFiles[index]?.name}</Text>
              </Stack>
              <Button
                variant="icon"
                maxW="fit-content"
                onClick={handleNext}
                disabled={index === acceptedFiles.length - 1}
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
