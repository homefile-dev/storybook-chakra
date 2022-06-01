import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { TextInput } from '../inputs'

export const EditFolderName = () => {
  return (
    <Box bg="container.tertiary" w="100%" p="base">
      <Flex gap="base" align="center">
        <Text fontFamily='secondary' minW="fit-content">
          {t('folderSharing.details.name')}
        </Text>
        <TextInput
          handleChange={(event) => event}
          id={'1'}
          placeholder={t('folderSharing.details.placeholder')}
          value={''}
        />
        <Button variant="secondary" maxW="fit-content" maxH="input.md">
          {t('createDocument.buttons.save')}
        </Button>
      </Flex>
    </Box>
  )
}

export default EditFolderName
