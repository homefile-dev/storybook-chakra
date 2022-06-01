import { Button, Center, Container, Stack, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { HiOutlinePlus } from 'react-icons/hi'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { DragDropAreaI } from '../../interfaces/dragDrop/DragDropArea.interface'
import { CustomIcon } from '../icons/CustomIcon'

export const DragDropArea = ({
  btnText = t('addMedia.addBtn'),
  errorMessage,
  getInputProps,
  getRootProps,
  hasError = false,
  height = '10rem',
  message = t('addMedia.dragDrop'),
}: DragDropAreaI) => {
  const { width } = useWindowDimensions()
  const isMobile = width < 700
  return (
    <Stack spacing="base">
      <Container variant="dragDrop" minW="full" {...getRootProps()}>
        <input {...getInputProps()} />
        {isMobile ? (
          <Button
            leftIcon={
              <CustomIcon type={HiOutlinePlus} color="white" size="7" />
            }
          >
            {btnText}
          </Button>
        ) : (
          <Center h={height}>
            <Text variant="info">{message}</Text>
          </Center>
        )}
      </Container>
      {hasError && <Text variant="error">{errorMessage}</Text>}
    </Stack>
  )
}
