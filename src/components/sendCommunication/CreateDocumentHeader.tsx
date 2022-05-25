import { Box, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { CreateDocumentHeaderI } from '../../interfaces/sendCommunication/CreateDocumentHeader.interface'
import DateRangePicker from '../inputs/DateRangePicker'
import SelectInput from '../inputs/SelectInput'

export const CreateDocumentHeader = ({
  initialHome = null,
  handleDateRange,
  handleSelectHome = () => null,
  homes = null,
}: CreateDocumentHeaderI) => {
  const { width } = useWindowDimensions()
  const isSmallMobile = width < 400
  return (
    <Box bg="container.tertiary" py="2" pl="base" w="100%">
      <Flex justify="space-between" align="center">
        {homes && initialHome ? (
          <Flex gap="2" align="center">
            {!isSmallMobile && (
              <Text variant="info">
                {t('sendCommunication.headers.selectHome')}
              </Text>
            )}

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
          {!isSmallMobile && (
            <Text variant="info">
              {t('sendCommunication.headers.dateRange')}
            </Text>
          )}
          <DateRangePicker
            handleClick={(date: string) => handleDateRange(date)}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default CreateDocumentHeader
