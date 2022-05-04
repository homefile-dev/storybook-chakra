import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Image,
  Box,
  Center,
  Container,
  Text,
  SimpleGrid,
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
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { SectionHeader } from '../headers'
import { HomeAddress } from '../../assets/images'

const AddMedia = () => {
  const [files, setFiles] = useState<any>([])
  const [index, setIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.svg', '.mp4', '.webm'],
    },
    onDrop: (acceptedFiles) => {
      const totalFiles = [...files, ...acceptedFiles]
      setFiles(
        totalFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const removeFile = (name: string) => {
    const validFileIndex = files.findIndex((file: File) => file.name === name)
    files.splice(validFileIndex, 1)
    setFiles([...files])
  }

  const handleNext = () => {
    if (index < files.length - 1) {
      setIndex(index + 1)
    }
  }
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
  }, [])

  const thumbs = files.map((file: any, index: number) => (
    <Box key={file.name} position="relative">
      <CloseButton
        onClick={() => removeFile(file.name)}
        size="sm"
        zIndex="5"
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
        {file.type.split('/')[0] === 'image' ? (
          <Image src={file.preview} boxSize="6rem" objectFit="cover" />
        ) : (
          <video src={file.preview} />
        )}
      </Button>
    </Box>
  ))

  return (
    <Stack spacing="base" w="full" bg="white" p="base">
      <SectionHeader title="Images & videos" titleIcon={HomeAddress} />
      <Container variant="dragDrop" minW="full" {...getRootProps()}>
        <input {...getInputProps()} />
        <Center h="10rem">
            <Text variant="info">
              Drag and drop imagens or videos here, or click to select files
            </Text>
        </Center>
      </Container>
      <SimpleGrid columns={6} spacing="base">
        {thumbs}
      </SimpleGrid>
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
                {files[index]?.type.split('/')[0] === 'image' ? (
                  <Image
                    src={files[index].preview}
                    boxSize="26rem"
                    objectFit="cover"
                  />
                ) : (
                  <video width="500" controls>
                    <source src={files[index]?.preview} />
                  </video>
                )}
                <Text>{files[index]?.name}</Text>
              </Stack>
              <Button
                variant="icon"
                maxW="fit-content"
                onClick={handleNext}
                disabled={index === files.length - 1}
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
