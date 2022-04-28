import { Box, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { ICreateDocumentHeader } from '../../interfaces/sendCommunication/CreateDocumentHeader.interface'
import DateRangePicker from '../inputs/DateRangePicker'
import SelectInput from '../inputs/SelectInput'

export const CreateDocumentHeader = ({
  initialHome = null,
  handleDateRange,
  handleSelectHome = () => null,
  homes = null,
}: ICreateDocumentHeader) => {
  return (
    <Box bg="container.tertiary" py="2" pl="base">
      <Flex justify="space-between" align="center">
        {initialHome && handleSelectHome && homes ? (
          <Flex gap="2" align="center">
            <Text variant="info">
              {t('sendCommunication.headers.selectHome')}
            </Text>

            <SelectInput
              handleClick={(form) => handleSelectHome(form)}
              initailValue={initialHome}
              items={homes}
            />
          </Flex>
        ) : (
          <Box />
        )}
        <Flex gap="2" align="center">
          <Text variant="info">{t('sendCommunication.headers.dateRange')}</Text>
          <DateRangePicker
            handleClick={(date: string) => handleDateRange(date)}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default CreateDocumentHeader
