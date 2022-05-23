import { Box, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { isEmptyField } from '../../helpers/Validations'
import { DocumentNameHeaderI } from '../../interfaces/headers/DocumentNameHeader.interface'
import { TextInput } from '../inputs'

export const DocumentNameHeader = ({
  id = '',
  handleChange,
  value = '',
}: DocumentNameHeaderI) => {
  return (
    <Box bg="container.neutralBlue" py="2" px="base" w="100%">
      <Flex gap="2" align="center">
        <Text variant="info" minW="fit-content">
          {t('sendCommunication.headers.documentName')}
        </Text>
        <TextInput
          errorMessage={`${t('sendCommunication.headers.documentName')} ${t(
            'forms.required'
          )}`}
          hasError={isEmptyField(value)}
          id={id}
          handleChange={handleChange}
          placeholder={t('sendCommunication.placeholder')}
          value={value}
        />
      </Flex>
    </Box>
  )
}

export default DocumentNameHeader
