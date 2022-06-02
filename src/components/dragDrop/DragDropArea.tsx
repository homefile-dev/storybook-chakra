import { Center, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { DragDropAreaI } from '../../interfaces/dragDrop/DragDropArea.interface'
import { CustomIcon } from '../icons/CustomIcon'

export const DragDropArea = ({
  errorMessage,
  getInputProps,
  getRootProps,
  hasError = false,
  height = '3rem',
  message = t('dragDrop.message'),
  message2 = t('dragDrop.message2'),
  variant = 'dragDropDashed',
}: DragDropAreaI) => {
  return (
    <Stack spacing="base">
      <Container variant={variant} minW="full" {...getRootProps()}>
        <input {...getInputProps()} />
        <Center h={height}>
          <Flex align="center" gap="1">
            <CustomIcon type={AiOutlineCloudUpload} color="gray.400" size="6" />
            <Flex align="center" gap="1">
              {message && <Text variant="dragDrop">{message}</Text>}
              {message2 && <Text variant="dragDropLink">{message2}</Text>}
            </Flex>
          </Flex>
        </Center>
      </Container>
      {hasError && <Text variant="error">{errorMessage}</Text>}
    </Stack>
  )
}
