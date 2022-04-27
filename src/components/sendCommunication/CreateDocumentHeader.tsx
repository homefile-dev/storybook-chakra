import { Box, Flex, Select } from '@chakra-ui/react'
import { PanelHeader } from '../headers'
import Report from '../../assets/images/progress-report.svg'
import { t } from 'i18next'
import DateRangePicker from '../inputs/DateRangePicker'
import { CustomIcon } from '../icons/CustomIcon'
import { BsChevronDown } from 'react-icons/bs'

export const CreateDocumentHeader = () => {
  return (
    <Box bg="container.neutralBlue" py="2" pl="base">
      <Flex justify="space-between" align="center">
        <Flex gap="base" align="center">
          <Select
            w="12rem"
            placeholder="Select Home"
            icon={<CustomIcon type={BsChevronDown} />}
            size="sm"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            w="12rem"
            placeholder="Progress Report"
            icon={<CustomIcon type={BsChevronDown} />}
            size="sm"
          >
          </Select>
        </Flex>
        <DateRangePicker />
      </Flex>
    </Box>
  )
}

export default CreateDocumentHeader
